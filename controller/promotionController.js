const Promotion = require('../node_mongoose/model/promotions')

//Create new promotion
exports.create = async (req, res) => {
  try {
    const promotion = new Promotion({
      name: req.body.name,
      image: req.body.image,
      label: req.body.label,
      price: req.body.price,
      description: req.body.description,
      featured: req.body.featured
    })
    const result = await promotion.save()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json("Creating fail!")
  }
}

// get all promotions
exports.findAll = async (req, res) => {
  try {
    const result = await Promotion.find({})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Get all fail!")
  }
}

// delete all promotions
exports.deleteAll = async (req, res) => {
  try {
    const result = await Promotion.deleteMany({})
    return res.status(200).json("Deleted all promotions")
  } catch {
    return res.status(500).json("Deleting fail!")
  }
}

// Get promotion by Id
exports.getById = async (req, res) => {
  try {
    const result = await Promotion.find({_id: req.params.promoId})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Getting fail!")
  }
}

// Update promotion by Id
exports.upadateById = async (req, res) => {
  try {
    const result = await Promotion.findOneAndUpdate({_id: req.params.promoId}, req.body)
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Updating fail!")
  }
}

// Delete promotion by Id
exports.deleteById = async (req, res) => {
  try {
    const result = await Promotion.findOneAndRemove({_id: req.params.promoId})
    return res.status(200).json("Deleted")
  } catch {
    return res.status(500).json("Deleting fail!")
  }
}