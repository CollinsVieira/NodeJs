const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

//Req = request
// res = response
app.get('/', (req, res) => {
    res.send("<h1>Hola mundo</h1> <p>Esto es un parrafo</p>")

})

app.get('/api/v1/blog', (req, res) => {
    res.json(
        {
            titulo: "El APRA nunca muere",
            autor: "Collins",
            contenido: "El APRA renace con su nuevo cantidado para la presidencia del Perú.",
            fecha: "2025-12-01"
        }
    )
})

app.listen(port, (req, res) => {
    console.log(`Example app listening on port ${port}`)
})

///// PARAMETROS EN UNA API

app.get('/api/v1/mensaje/:id', (req, res) => {
    res.send("El id enviado por parámetros es: " + req.params.id)
})

app.get('/api/v1/productos/:id', (req, res) => {
    const { id } = req.params
    res.json(
        {
            id: id,
            nombre: "Producto 1",
            precio: 100
        }
    )
})


///// PARAMETROS QUERY
app.get('/api/v1/usuarios/', (req, res) => {
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

app.get('/api/v1/animales/', (req, res) => {
    const { size } = req.query
    const limit = size || 10
    const animales = []
    for (let i; i > limit; i++) {
        animales.push({
            id: i,
            nombre: faker.animal.name(),
            tipo: faker.animal.type(),

        })

    }
    console.log(faker.animal.name())
    res.json(animales)
})
