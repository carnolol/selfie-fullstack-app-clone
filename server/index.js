const massive = require('massive')
const express = require('express')
const productCtrl = require('./controllers/productController')
// const cors = require('cors')
require('dotenv').config()
const app = express()
// app.use(cors())
app.use(express.json())
const{SERVER_PORT, CONNECTION_STRING}=process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('DB IS CONNECTED')
    app.set('db', db)
}).catch(error => console.log(`error with massive ${error}`))



app.get('/api/inventory', productCtrl.getAllProducts)
app.get('/api/inventory/:id', productCtrl.getOneProduct)
app.post('/api/products', productCtrl.addProduct)
app.put('/api/products/:id', productCtrl.editProduct)
app.delete('/api/products/:id', productCtrl.deleteProduct)



app.listen(SERVER_PORT, () => console.log(`PRODUCT PORT CONNECTED ON PORT ${SERVER_PORT}`))