const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Haunt } = require('../../db/models');


const router = express.Router();

router.get('/', async(req,res,next) => {
  const haunts = Haunt.findAll();
  console.log(haunts);
  res.json(haunts);
})


// Dont forget to requireAuth for all non get routes!














module.exports = router;