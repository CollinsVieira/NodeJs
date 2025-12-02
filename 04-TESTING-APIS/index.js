const express = require('express');
const apiRouter = require('./server')
const cors = require('cors')
const { errorLogs, errorHandler } = require('./middleware/error.handler')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.listen(port, () => {
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

apiRouter(app)

app.use(errorHandler)
app.use(errorLogs)