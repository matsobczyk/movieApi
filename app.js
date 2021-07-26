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

try{
	mongoose.connect(
		process.env.DB_CONNECTION,
		{ useUnifiedTopology: true, useNewUrlParser: true },
		() => console.log('DB connection state: ' + mongoose.connection.readyState)
	)
}catch (error) {
	console.log(error);
}

app.listen(3000);




