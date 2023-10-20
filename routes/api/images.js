const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload, multipleMulterUpload, multiplePrivateFileUpload } = require('../../awsS3') 

const router = express.Router();

// // upload a profile picture
// router.post('/profile', requireAuth, async (req, res, next) => {
//   try {
//     const newImage = await Image.create({
//       userId: req.user.id,
//       url: req.body.url,
//       hauntId: null
//     })
//     if (newImage) {
//       return res.json(newImage);
//     } else {
//       next({
//         message: 'Image couldn\'t be created.',
//         status: 409
//       })
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// upload haunt images
router.post('/multiple/:hauntId', requireAuth, async (req, res, next) => {
  try {
    console.log(req.body.images)
    const newImages = req.body.images.map(async image => {
      return await Image.create({
        userId: null,
        url: image.url,
        hauntId: req.params.hauntId
      })
    })
    if (newImages) {
      res.redirect(`/api/haunts/${req.params.hauntId}`)
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

// router.delete('/:imageId', requireAuth, async(req,res,next) => {
//   try{
//     const image = Image.findByPk(req.params.imageId);
//     if(image){
//       await image.destroy();
//       res.json({
//         message: "Successful",
//         status: 200
//       })
//     } else {
//       next({
//         title: 'Not Found',
//         message: `Image ${req.params.hauntId} couldn't be found`,
//         status: 404
//       })
//     }
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router;