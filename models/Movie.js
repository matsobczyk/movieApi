const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	released: {
		type: Date
	},
	genre: {
		type: String
	},
	director: {
		type: String
	},
})

module.exports = mongoose.model("Movie", Movie);