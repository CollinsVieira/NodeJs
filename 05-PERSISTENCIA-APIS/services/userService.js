const { models } = require('../libs/sequelize')

const getAllUsers = async (req, res) => {
    const response = await models.user.findAll()
    return response
}

const getUserById = (req, res) => {

}

const createUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}