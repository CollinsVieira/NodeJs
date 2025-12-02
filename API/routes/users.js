const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    // limit = limite de registros
    // offset = desde que registro
    const { limit, offset } = req.query
    if (limit && offset) {
        res.json(
            {
                limit: limit,
                offset: offset
            }
        )
    } else {
        res.send("No hay limit ni offset")
    }
})

module.exports = router
