const express = require('express')
const router = express.Router()
const productService = require('../services/productService')


router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProducts(req, res)
        return res.send(products)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router