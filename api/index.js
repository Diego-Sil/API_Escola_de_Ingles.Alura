const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000
app.use(cors())

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app