
const express = require('express');
const router = express.Router()
const productsService = require('../services/serviceProduct')
const validatorHandler = require('../middleware/validator.handler')
const { createProductSchema } = require('../schema/productSchema')

router.get('/', async (req, res) => {
    const products = await productsService.getAllProducts(req, res)
    res.json(products)
})


router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
        const product = await productsService.createProduct(req, res)
        res.json(product)
    })

router.get('/:id', async (req, res) => {
    const product = await productsService.getProductById(req, res)
    res.json(product)
})

module.exports = router
