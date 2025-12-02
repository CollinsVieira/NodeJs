const productRouter = require('../routes/products')
const express = require('express')

function apiRouter(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productRouter)
}

module.exports = apiRouter