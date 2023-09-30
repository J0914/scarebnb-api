const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Haunt, Review, Image, User } = require('../../db/models');


const router = express.Router();

const validateHaunt = [
  check('hostId')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a hostId.'),
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please give your haunt a title.')
    .isLength({ min: 1, max: 50 })
    .withMessage('Title must be between 1 and 50 characters.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please include a description.')
    .isLength({ min: 1, max: 5000 })
    .withMessage('Description must be between 1 and 5000 characters.'),
  check('street')
    .exists({ checkFalsy: true })
    .withMessage('Please include the street address.')
    .isLength({ min: 1, max: 50 })
    .withMessage('Street must be between 1 and 50 characters.'),
  check('city')
    .exists({ checkFalsy: true })
    .withMessage('Please include the city.')
    .isLength({ min: 1, max: 30 })
    .withMessage('City must be between 1 and 30 characters.'),
  check('state')
    .exists({ checkFalsy: true })
    .withMessage('Please include the state.')
    .isLength({ min: 1, max: 20 })
    .withMessage('State must be between 1 and 30 characters.'),
  check('zip_code')
    .exists({ checkFalsy: true })
    .withMessage('Please include the ZIP code.')
    .isLength({ min: 5, max: 5 })
    .withMessage('Zip code must be 5 numbers.')
    .isNumeric()
    .withMessage('Zip code must be 5 numbers.'),
  check('max_guests')
    .exists({ checkFalsy: true })
    .withMessage('Please include the maximum number of guests.')
    .isInt()
    .withMessage('Max guests must be a number.'),
  check('beds')
    .exists({ checkFalsy: true })
    .withMessage('Please include the number of beds.')
    .isInt()
    .withMessage('Beds must be a number.'),
  check('bedrooms')
    .exists({ checkFalsy: true })
    .withMessage('Please include the number of bedrooms.')
    .isInt()
    .withMessage('Bedrooms must be a number.'),
  check('bathrooms')
    .exists({ checkFalsy: true })
    .withMessage('Please include the number of bathrooms.')
    .isInt()
    .withMessage('Bathrooms must be a number.'),
  check('price')
    .exists({ checkFalsy: true })
    .withMessage('Please include a price.')
    .isInt({
      min: 1
    })
    .withMessage('You cannot list a haunt for free.'),
  handleValidationErrors
];

// get all haunts
router.get('/', async (req, res, next) => {
  try {
    const haunts = await Haunt.findAll({
      include: [
        {
          model: Review,
          attributes: ['id', 'body', 'updatedAt'],
          required: true,
          include: {
            model: User,
            attributes: ['first_name']
          }
        },
        {
          model: User,
          attributes: ['first_name'],
        },{
          model: Image,
          required: true,
          attributes: ['id', 'url', 'hauntId']
        }]
    });
    if (haunts.length > 0) res.json(haunts);
    else next({
      title: 'Not Found',
      message: "Haunts couldn't be found",
      status: 404
    })
  } catch (err) {
    next(err)
  }
})

// get single haunt
router.get('/:hauntId', async (req, res, next) => {
  try {
    const haunt = await Haunt.findByPk(req.params.hauntId);
    console.log('HAUNT>>>>>>>>>>>>>>>>', haunt)
    if (haunt) res.json(haunt);
    else next({
      title: 'Not Found',
      message: `Haunt ${req.params.hauntId} couldn't be found`,
      status: 404
    })
  } catch (err) {
    next(err);
  }
})

// create new haunt, require user to be logged in, send back the created haunt
router.post('/', requireAuth, validateHaunt, async (req, res, next) => {
  try {
    // check if there is already a listing at this street address
    const alreadyCreated = Haunt.findAll({
      where: {
        street: req.body.street,
        zip_code: req.body.zip_code
      }
    })

    if (alreadyCreated.length > 0) {
      next({
        title: 'Forbidden',
        message: 'A haunt already exists at this street address.',
        status: 403
      })
    }

    const newHaunt = await Haunt.create({
      hostId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      max_guests: req.body.max_guests,
      beds: req.body.beds,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      price: req.body.price
    })
    if (newHaunt) res.json(newHaunt);
    else next({
      title: 'Could not be processed',
      message: "Haunt couldn't be created, please check your inputs",
      status: 409
    })
  } catch (err) {
    next(err)
  }
})

// update single haunt
router.put('/:hauntId', requireAuth, async (req, res, next) => {
  try {
    let haunt = await Haunt.findByPk(req.params.hauntId);
    if (haunt) {
      if (req.user.id !== haunt.hostId) next({
        title: 'Forbidden',
        message: 'Boo! Sorry, you can only edit your own haunts.',
        status: 403
      })

      haunt = await haunt.update({
        hostId: req.body.hostId || haunt.id,
        title: req.body.title || haunt.title,
        description: req.body.description || haunt.description,
        street: req.body.street || haunt.street,
        city: req.body.city || haunt.city,
        state: req.body.state || haunt.state,
        zip_code: req.body.zip_code || haunt.zip_code,
        max_guests: req.body.max_guests || haunt.max_guests,
        beds: req.body.beds || haunt.beds,
        bedrooms: req.body.bedrooms || haunt.bedrooms,
        bathrooms: req.body.bathrooms || haunt.bathrooms,
        price: req.body.price || haunt.price
      })
      res.json(haunt)
    } else {
      next({
        title: 'Not Found',
        message: `Haunt ${req.params.hauntId} couldn't be found`,
        status: 404
      })
    }
  } catch (err) {
    next(err)
  }
})

// delete a haunt
router.delete('/:hauntId', requireAuth, async (req, res, next) => {
  try {
    const haunt = await Haunt.findByPk(req.params.hauntId);
    if (haunt) {
      if (req.user.id !== haunt.hostId) next({
        title: 'Forbidden',
        message: 'Boo! Sorry, you can only delete your own haunts.',
        status: 403
      })
      await haunt.destroy();
      res.json({
        message: "Successful",
        status: 200
      })
    } else {
      next({
        title: 'Not Found',
        message: `Haunt ${req.params.hauntId} couldn't be found`,
        status: 404
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router;