const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const ProductSchema = new mongoose.Schema({
	tittle: {
		type: String,
		unique: true,
		required: [true, 'Requiere de un nombre para el producto'],
		minleght: [3, 'El producto no puede tener menos de 3 caracteres']
	},
	price:{
		type: Number,
		required: [true, 'Debe ingresarse el costo del producto']
	},
	description: {
		type: String,
		unique: true,
		required: [true, 'Se requiere descripción del producto'],
		minleght: [10, 'La descripción no puede tener menos de 3 caracteres']
	},	
});

ProductSchema.plugin(uniqueValidator)
const Products = mongoose.model("product", ProductSchema);
module.exports = Products;

