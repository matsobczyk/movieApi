const { RateLimiterMongo } = require('rate-limiter-flexible');
const mongoose = require('mongoose');
const mongoConnection = mongoose.connection;
const cron = require('node-cron')

const postMovieLimit = new RateLimiterMongo(
	{
		storeClient: mongoConnection,
		points: 5,
		duration: 0,
	});

const postMovieLimiter = (req, res, next) => {
	if (req.user.role == 'premium') {
		next();
	} else if (req.user.role == 'basic') {
		const userId = req.user.userId;
		postMovieLimit.consume(userId).then(() => {
			next();
		}).catch((err) => {
			res.status(429).json('You have used ' + err.consumedPoints +
				' points. Number of your points left: ' + err.remainingPoints);
		});
	}
};

const resetPostMovieLimiter = cron.schedule(' 0 0 1 * * ', () => {
	try {
		mongoConnection.dropCollection('rlflx');
		console.log('Basic user limit reset succeded.')
	} catch (err) {
		console.log(err.message)
	}
});

module.exports.postMovieLimiter = postMovieLimiter;
module.exports.resetPostMovieLimiter = resetPostMovieLimiter;