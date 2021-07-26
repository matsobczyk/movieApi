const router = require('express').Router();
moviesController = require('../controllers/movies');

router.get('/', moviesController.getMovies);
router.post('/', moviesController.postMovie);

module.exports = router;