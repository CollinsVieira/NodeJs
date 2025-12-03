const { models } = require('../libs/sequelize')

const getAllProducts = async () => {
    return await models.Product.findAll()
}

module.exports = {
    getAllProducts
}