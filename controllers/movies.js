const Movie = require('../models/Movie');
const axios = require('axios')

exports.postMovie = (req, res) => {
	const urla = process.env.OMDB_CONNECTION + '&t=' + req.body.title + '&';
	try {
		axios.get(urla).then(async (response) => {
			const movie = new Movie({
				title: response.data.Title,
				released: response.data.Released,
				genre: response.data.Genre,
				director: response.data.Director
			});
			try {
				const savedMovie = await movie.save();
				res.status(200).json(savedMovie);
			} catch (error) {
				res.status(400).json(error.message);
			}
		})
	} catch (error) {
		res.json(error.message)
	}
}

exports.getMovies = async (req, res) => {
	const movies = await Movie.find().exec();
	res.status(200).json(movies);
}

