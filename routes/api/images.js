const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload, multipleMulterUpload, multiplePrivateFileUpload } = require('../../awsS3') 

const router = express.Router();

// upload a profile picture
router.post('/profile', requireAuth, async (req, res, next) => {
  try {
    const newImage = await Image.create({
      userId: req.user.id,
      url: req.body.url,
      hauntId: null
    })
    if (newImage) {
      return res.json(newImage);
    } else {
      next({
        message: 'Image couldn\'t be created.',
        status: 409
      })
    }
  } catch (err) {
    next(err)
  }
})

// upload haunt images
router.post('/multiple/:hauntId', requireAuth, async (req, res, next) => {
  try {
    const newImages = images.map(async image => {
      return await Image.create({
        userId: null,
        url: image.url,
        hauntId: req.params.hauntId
      })
    })
    if (newImages) {
      const haunt = Haunt.findByPk(req.params.hauntId, {
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
      })
      return res.json(haunt);
    } else {
      next({
        message: 'Images couldn\'t be created.',
        status: 409
      })
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:imageId', requireAuth, async(req,res,next) => {
  try{
    const image = Image.findByPk(req.params.imageId);
    if(image){
      await image.destroy();
      res.json({
        message: "Successful",
        status: 200
      })
    } else {
      next({
        title: 'Not Found',
        message: `Image ${req.params.hauntId} couldn't be found`,
        status: 404
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router;