const { postMovieLimiter } = require('../middlewares/rateLimit');
const router = require('express').Router();
const moviesController = require('../controllers/movies');

router.get('/', moviesController.getMovies);
router.post('/', postMovieLimiter, moviesController.postMovie);

module.exports = router;