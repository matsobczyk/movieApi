const { loginValidation } = require("../middlewares/validation");
const axios = require('axios')

exports.login = (async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	
	const user = await axios({
		method: 'post',
		url: 'http://auth:3000/auth',
		data: {
			username: req.body.username,
			password: req.body.password,
		}
	}).catch((error) => {
		console.log(error.message);
	});

	try {
		res.status(200).json(user.data)
	} catch (error) {
		res.json(error.message)
	}
});