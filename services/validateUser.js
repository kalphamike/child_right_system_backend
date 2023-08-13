const Joi = require('joi');

exports.valideLogin = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label('name')
    })
}