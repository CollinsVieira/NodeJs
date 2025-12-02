
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.json(
        {
            nombre: "Producto 1",
            precio: 100
        }
    )
})


router.post('/', (req, res) => {
    const body = req.body
    res.json(
        {
            ok: true,
            data: body
        }
    )
})

module.exports = router
