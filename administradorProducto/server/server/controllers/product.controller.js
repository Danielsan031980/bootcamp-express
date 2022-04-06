const Product = require("../models/product.model");

//encontrar todos los productos disponibles
module.exports.findProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.json({ products: products })
  }
  catch(err){
    return res.json({ message: ' No hemos podido traer la data', error: err})
  }
}

//crear un nuevo producto 
module.exports.createProduct = async (req, res) => {
  try {
    const productcreate = await Product.create(req.body)
    return res.json({ productcreate })
  }
  catch(err){
    return res.json({ message: ' No hemos crear la data', error: err})
  }

}

// Metodo para borrar un producto
module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id })
    return res.json({ product })
  }
  catch(err){
    return res.json({ message: ' No hemos podido borrar la data', error: res.status(500).jason(err)})
  }

}