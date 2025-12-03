const express = require('express')
const router = express.Router()
const usersService = require('../services/userService')


router.get('/', async (req, res) => {
    try {
        const users = await usersService.getAllUsers(req, res)
        return res.send(users)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router