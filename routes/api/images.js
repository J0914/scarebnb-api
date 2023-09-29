const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Haunt, Image, User } = require('../../db/models');
import { singlePublicFileUpload, singleMulterUpload, multipleMulterUpload, multiplePublicFileUpload } from '../../awsS3'

const router = express.Router();

router.post('/single', singleMulterUpload("image"), async (req, res, next) => {
  try {
    const profileImageUrl = await singlePublicFileUpload(req.image);
    const newImage = await Image.create({
      userId: req.user.id,
      url: profileImageUrl,
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

router.post('/multiple/:hauntId', multipleMulterUploadMulterUpload("images"), async (req, res, next) => {
  try {
    const images = await multiplePrivateFileUpload(req.body.images);
    const newImages = images.map(async image => {
      return await Image.create({
        userId: null,
        url: image,
        hauntId: req.params.hauntId
      })
    })
    if (newImages) {
      return res.json(newImages);
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

router.delete('/:imageId', async(req,res,next) => {
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