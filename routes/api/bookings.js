const express = require('express')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, (req,res,next) => {
  res.json('it worked *happy dance*')
})

module.exports = router;