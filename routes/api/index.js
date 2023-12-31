const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hauntsRouter = require('./haunts.js');
const bookingsRouter = require('./bookings.js');
const reviewsRouter = require('./reviews.js');
const favoritesRouter = require('./favorites.js');
const imagesRouter = require('./images.js')
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/haunts', hauntsRouter);
router.use('/bookings', bookingsRouter);
router.use('/reviews', reviewsRouter);
router.use('/favorites', favoritesRouter);
router.use('/images', imagesRouter);

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction){
  // set token
  router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
          username: 'Demo-lition'
        }
      });
    setTokenCookie(res, user);
    return res.json({ user: user });
  });
}

module.exports = router;