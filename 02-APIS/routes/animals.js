const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    const { size } = req.query
    const limit = size || 10
    const animales = []
    for (let i = 1; i <= limit; i++) {
        animales.push({
            id: i,
            nombre: "perro",
            tipo: "canino",

        })

    }
    res.json(animales)
})

module.exports = router
