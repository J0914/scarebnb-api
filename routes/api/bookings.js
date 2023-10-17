const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Booking, Haunt } = require('../../db/models');
const { Op } = require('sequelize')

const router = express.Router();

const validateBooking = [
  check('check_in')
    .exists({ checkFalsy: true })
    .custom((value) => {
      if(new Date(value) <= new Date()) {
          throw new Error ('Check-in cannot be in the past.');
      }
      return true;
    })
    .withMessage('Check-in cannot be in the past.'),
  check('check_out')
    .exists({ checkFalsy: true })
    .custom((value, { req, next }) => {
      if(new Date(value) <= new Date(req.body.check_in)) {
          throw new Error ('Check-out cannot be before check-in.');
      }
      return true;
    })
    .withMessage('Check-out date cannot be before check-in.'),
  check('num_guests')
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage('Please include the number of guests.'),
  handleValidationErrors
]

// get all bookings for current haunt
router.get('/haunt/:hauntId', async(req,res,next) => {
  const bookings = await Booking.findAll({
    where: {
      hauntId: req.params.hauntId
    },
    attributes: ['id', 'check_in', 'check_out'] 
  })

 res.json(bookings);
  
})

// get all bookings for current user
router.get('/', requireAuth, async(req,res,next) => {
  try {
    const bookings = await Booking.findAll({
      
      where: {
        userId: req.user.id
      }
    })
    if (bookings.length > 0) {
      if (req.user.id !== bookings[0].userId){
        next({
          title: 'Forbidden',
          message: 'Boo! Sorry, you can only see your own bookings.',
          status: 403
        })
      } else {
        res.json(bookings)
      }
    }
    else {
      next({
          title: 'Not Found',
          message: `Bookings for user ${req.user.id} couldn't be found`,
          status: 404
      })
    }
  } catch(err) {
    next(err)
  }
})

// get single booking for current user
router.get('/:bookingId', requireAuth, async(req,res,next) => {
  try {
    const booking = await Booking.findByPk(req.params.bookingId)
    // check if this user is the owner of this booking
    if (booking) {
      if (req.user.id !== booking.userId){
        next({
          title: 'Forbidden',
          message: 'Boo! Sorry, you can only see your own bookings.',
          status: 403
        })
      } else {
        res.json(booking)
      }
    } else {
      next({
        title: 'Not Found',
        message: `Booking ${req.params.bookingId} couldn't be found`,
        status: 404
      })
    }
  } catch(err){
    next(err);
  }
})

// create a booking
router.post('/:hauntId', requireAuth, validateBooking, async(req,res,next) => {
  try {
    // check if this user owns this haunt
    const haunt = await Haunt.findByPk(req.params.hauntId);
    if (req.user.id === haunt.hostId) {
      next({
        title: 'Forbidden',
        message: 'Boo! Sorry, you can\'t book your own Haunt.',
        status: 403
      })
    }
    // check if this haunt is already booked for this date
    const alreadyBooked = await Booking.findAll({
      where: {
        hauntId: req.params.hauntId,
        [Op.or]: [
          {
            check_in: {
              [Op.between]: [req.body.check_in, req.body.check_out]
            }
          },
          {
            check_out: {
              [Op.between]: [req.body.check_in, req.body.check_out]
            }
          }
        ]
      }
    })

    if (alreadyBooked.length > 0){
      next({
        title: 'Forbidden',
        message: 'Sorry, this Haunt has already been booked for this date.',
        status: 403
      })
    }
    
    // create new booking if everything else works out
    const newBooking = await Booking.create({
      "hauntId": req.params.hauntId,
      "userId": req.user.id,
      "check_in": req.body.check_in,
      "check_out": req.body.check_out,
      "num_guests": req.body.num_guests,
    })
    if (newBooking) res.json(newBooking);
    else {
      next({
        title: "Could not be processed",
        message: "Booking couldn't be created, please check your inputs",
        status: 409
      })
    }
  } catch(err) {
    next(err)
  }
})

// delete a booking
router.delete('/:bookingId', requireAuth, async(req,res,next) => {
  try{
    const booking = await Booking.findByPk(req.params.bookingId)
    if (booking && booking.userId === req.user.id){
      await booking.destroy();
      res.json({
        message: "Successful",
        status: 200 
      })
    } else {
      next({
        title: 'Not Found',
        message: `Booking ${req.params.bookingId} couldn't be found`,
        status: 404
      })
    }
  } catch(err) {
    next(err)
  }
})

module.exports = router;