const express = require('express');
const apiRouter = require('./server')
const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

apiRouter(app)