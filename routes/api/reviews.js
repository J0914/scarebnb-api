const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Review, Booking } = require('../../db/models');
const { Op } = require('sequelize')

const router = express.Router();

const validateReview = [
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 5000 })
    .withMessage('You must include something in the body of your review.'),
    handleValidationErrors
]

// get all reviews for haunt
router.get('/:hauntId', async(req,res,next) => {
  try{
    const reviews = await Review.findAll({
      where: {
        hauntId: req.params.hauntId
      }
    })
    if (reviews.length > 0) res.json(reviews)
    else {
      next({
        title: 'Not Found',
        message: `Reviews for Haunt ${req.params.hauntId} couldn't be found`,
        status: 404
      })
    }
  } catch(err) {
    next(err);
  }
})

// create a new review for specific haunt
router.post('/:hauntId', requireAuth, validateReview, async(req,res,next) => {
  try {
    // check to see if this user has a booking with a checkout date prior to now
    const booking = Booking.findOne({
      where: {
        userId: req.user.id,
        check_out: {
          [Op.lt]: new Date()
        }
      }
    })
    // check if this user has already left a review
    const review = Review.findOne({
      where: {
        userId: req.user.id,
        hauntId: req.params.hauntId
      }
    })
    if (booking && !review){
      const newReview = Review.create({
        hauntId: req.params.hauntId,
        userId: req.user.id,
        body: req.body.body
      })
      if (newReview) res.json(newReview);
      else next({
        title: 'Could not be processed',
        message: "Review couldn't be created, please check your inputs",
        status: 409
      })
    } else {
      next({
        title: 'Forbidden',
        message: 'Either you\'ve already reviewed this haunt, or you\'ve never completed a booking here.',
        status: 403
      })
    }
  } catch(err) {
    next(err);
  }
})

// edit a review owned by this user
router.put('/:reviewId', requireAuth, validateReview, async(req,res,next) => {
  try{
    const review = Review.findByPk(req.params.reviewId);
    if (review){
      if (req.user.id !== review.userId){
        next({
          title: 'Forbidden',
          message: 'Boo! Sorry you can\'t edit reviews that don\'t belong to you',
          status: 403
        })
      }
      const updatedReview = review.update({
        hauntId: req.params.hauntId,
        userId: req.user.id,
        body: req.body.body || review.body
      })
      if (updatedReview) res.json(updatedReview);
      else next({
        title: "Could not be processed",
        message: "Review couldn't be edited, please check your inputs",
        status: 409
      })
    } else {
      next({
        title: 'Not Found',
        message: `Review ${req.params.reviewId} couldn't be found`,
        status: 404
      })
    }
  } catch(err) {
    next(err)
  }
})

// delete a review owned by this user
router.delete('/:reviewId', requireAuth, async(req,res,next) => {
  try{
    const review = await Review.findByPk(req.params.reviewId)
    if (review){
      if (req.user.id === review.userId){
        await review.destroy()
        res.json({
          message: "Successful",
          status: 200 
        })
      } else {
        next({
          title: 'Forbidden',
          message: 'Boo! Sorry you can\'t delete reviews that don\'t belong to you.',
          status: 403
        })
      }
    } else {
      next({
        title: 'Not Found',
        message: `Review ${req.params.reviewId} couldn't be found`,
        status: 404
      })
    }
  } catch(err){
    next(err)
  }
})

module.exports = router;