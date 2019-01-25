require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const { CONNECTION_STRING, SERVER_PORT } = process.env
const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())
app.use(express.static('build'))

massive(CONNECTION_STRING)
    .then(db => app.set('db',db))

app.get(`/api/inventory`, ctrl.getAllProducts)
app.post(`/api/product`, ctrl.postNewProduct)
app.delete(`/api/product/:id`, ctrl.deleteProduct)
app.put(`/api/product/:id`, ctrl.updateProduct)


const port = SERVER_PORT || 3000
app.listen(port, () => console.log('Listening on port', port))