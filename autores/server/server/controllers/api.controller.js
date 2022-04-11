const Api = require("../models/api.model");


module.exports.getAllApi = async (req, res) => {
  try {
    const api = await Api.find()
    return res.json({ api })
  }
  catch(err){
    return res.json({ message: ' No hemos podido traer la data', error: err})
  }
}


module.exports.createApi = async (req, res) => {
    try {
      const api = await Api.create(req.body)
      return res.json({ api })
    }
    catch(err){
      return res.json({ message: ' No hemos crear la data', error: err})
    }
  
  }

  module.exports.getSingleApi = async (req, res) => {
    try {
      const api = await Api.findOne({ _id: req.params.id })
      return res.json({ api })
    }
    catch(err){
      return res.json({ message: ' No hemos podido encontrar la data', error: res.status(500).json(err)})
    }
  
  }


  module.exports.deleteApi = async (req, res) => {
    try {
      const api = await Api.deleteOne({ _id: req.params.id })
      return res.json({ api })
    }
    catch(err){
      return res.json({ message: ' No hemos podido borrar la data', error: res.status(500).json(err)})
    }
  
  }

  module.exports.updateApi = async (req, res) => {
    try {
      const api = await Api.findByIdAndUpdate({ _id: req.params.id}, req.body , {new: true} )
      return res.json({ api })
    }
    catch(err){
      return res.json({ message: ' No hemos podido encontrar la data', error: res.status(500).json(err)})
    }
  
  }