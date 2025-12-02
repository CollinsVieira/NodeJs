const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(30)
const price = Joi.number().integer().min(10)

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required()
})


module.exports = {
    createProductSchema
}