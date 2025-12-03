const productRouter = require('../routes/product')
const userRouter = require('../routes/user')
const express = require('express')

function apiRouter(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productRouter)
    router.use('/users', userRouter)
}

module.exports = apiRouter