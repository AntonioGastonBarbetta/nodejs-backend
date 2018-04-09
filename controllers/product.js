const Product = require('../models/product')


function getPorduct (req, res){

    let productId = req.params.productId

    Product.findById(productId, (error, product)=>{
        if (error) return res.status(500).send({messege: `error: ${error}`})
        if (!product) return res.status(404).send({messege: 'product not found'})

        res.status(200).send({product})
    })
    

}

function getPorducts (req, res){

    Product.find({}, (error, products)=>{
        if (error) return res.status(500).send({messege: `error: ${error}`})
        if (!products) return res.status(404).send({messege: 'products not found'})
    
        res.status(200).send({products})
    })
    
}

function upDatePorduct (req, res){

    let productId = req.params.productId
    let upDate = req.body

    console.log(req)

    Product.findByIdAndUpdate(productId, upDate, {new: true}, (error, productUpdated)=>{
        if (error) return res.status(500).send({messege: `error: ${error}`})

        res.status(200).send({product: productUpdated})
    })
    
}


function deletePorduct (req, res){

    let productId = req.params.productId
    
    Product.findById(productId, (error, product)=>{
        
        if (error) return res.status(500).send({messege: `error: ${error}`})
            
        product.remove(error =>{
            if (error) return res.status(500).send({messege: `error: ${error}`})
            res.status(200).send({messege: 'product was delated'})
        })

        
    })
    
}

function saveProduct (req, res){

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.catergory = req.body.catergory
    product.description = req.body.description

    product.save((error, product)=> {
        if (error) res.status(500).send()

        res.status(200).send(product)
    })

}


module.exports= {
    getPorduct,
    getPorducts,
    upDatePorduct,
    deletePorduct,
    saveProduct
}