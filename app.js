const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
const dotenv = require('dotenv');
dotenv.config();

try {
	mongoose.connect(
		process.env.DB_CONNECTION,
		{ useUnifiedTopology: true, useNewUrlParser: true },
		() => console.log('DB connection state: ' + mongoose.connection.readyState)
	)
} catch (error) {
	console.log(error);
}

const moviesRoute = require('./routes/movies.js');
const { login } = require('./controllers/auth.js');
const { auth } = require('./middlewares/auth.js');
const checkRole  = require('./middlewares/checkRole');

app.use('/movies', auth, moviesRoute);
app.post('/auth', login);

app.get('/checkUserType', auth, checkRole("premium", "basic"), (req, res) => {
	res.json(req.user.role)
})

app.listen(3000);




