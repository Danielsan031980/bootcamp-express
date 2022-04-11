const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')


const ApiSchema = new mongoose.Schema({
	autor:{
		type: String, 
			 unique: true,
			//  required: [true, 'Requiere de un nombre de autor'],
			 minleght: [3, 'El nombre de autor no puede tener menos de 3 caracteres']
	},
	libros:[
		{	
			bookname: {
				type:String,
			},
			year: {
				type:Number,			
			}

		}
	]
	
});

ApiSchema.plugin(uniqueValidator)
const Api = mongoose.model("autor", ApiSchema);
module.exports = Api;

