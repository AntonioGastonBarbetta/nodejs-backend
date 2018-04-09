const express = require('express')
const api = express.Router()

const ProductCtrl = require('../controllers/product')

api.get('/product',  ProductCtrl.getPorducts)

api.get('/product/:productId', ProductCtrl.getPorduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.upDatePorduct)

api.delete('/product/:productId', ProductCtrl.deletePorduct)

module.exports = api