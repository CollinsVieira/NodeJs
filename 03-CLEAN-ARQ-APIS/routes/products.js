
const express = require('express');
const router = express.Router()
const productsService = require('../services/serviceProduct')

router.get('/', async (req, res) => {
    const products = await productsService.getAllProducts(req, res)
    res.json(products)
})


router.post('/', async (req, res) => {
    const product = await productsService.createProduct(req, res)
    res.json(product)
})

module.exports = router
