const Joi = require("joi");
//login validation
exports.loginValidation = (data) => {
    const schema = Joi.object ({
        username: Joi.string()
            .required(),
			password: Joi.string()
            .required()
    });
    return schema.validate(data);
};

