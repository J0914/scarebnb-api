const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Favorite } = require('../../db/models');
const { Op } = require('sequelize')

const router = express.Router();

// get all favorites for current user
router.get('/', requireAuth, async(req,res,next) => {
  try {
    const favorites = await Favorite.findAll({
      where: {
        userId: req.user.id
      }
    })
    if (favorites.length > 0) {
      if (req.user.id === favorites[0].userId)
      res.json(favorites);
      else {
        next({
          title: 'Forbidden',
          message: 'Boo! Sorry you can only view your own favorites',
          status: 403
        })
      }
    } else {
      next({
        title: 'Not Found',
        message: `Favorites for user ${req.user.id} couln\'t be found.`
      })
    }
  } catch(err) {
    next(err)
  }
})

// create a favorite
router.post('/:hauntId', requireAuth, async(req,res,next) => {
  try {
    const favorite = await Favorite.findOne({
      where: {
        userId: req.user.id,
        hauntId: req.params.hauntId
      }
    }) 
    if (!favorite) {
      const newFavorite = await Favorite.create({
        userId: req.user.id,
        hauntId: req.params.hauntId
      })
      res.json(newFavorite)
    } else {
      next({
        title: 'Forbidden',
        message: 'Favorite already exists',
        status: 403
      })
    }
  } catch(err) {
    next(err)
  }
})

// delete a favorite
router.delete('/:favoriteId', requireAuth, async(req,res,next) => {
  try {
    const favorite = await Favorite.findByPk(req.params.favoriteId);
    if (favorite) {
      await favorite.destroy();
      res.json({
        message: 'Successful',
        status: 200
      })
    } else {
      next({
        title: 'Not Found',
        message: `Can\'t find favorite ${req.params.favoriteId}`,
        status: 404
      })
    }
  } catch(err) {
    next(err)
  }
})







module.exports = router;