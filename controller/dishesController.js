const Dish = require('../node_mongoose/model/dishes')

// create new dish
exports.create = async (req, res) => {
  try {
    const dish = new Dish({
      name: req.body.name,
      description: req.body.description,
      comments: req.body.comments
    })
    const result = await dish.save()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json("Creating fail!")
  }
}

// get all dishes
exports.findAll = async (req, res) => {
  try {
    const result = await Dish.find({})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Get all fail!")
  }
}

// delete all dishes
exports.deleteAll = async (req, res) => {
  try {
    const result = await Dish.deleteMany({})
    return res.status(200).json("Removed all dishes")
  } catch {
    return res.status(500).json("Removing fail!")
  }
}

// get dish by Id
exports.getById = async (req, res) => {
  try {
    const result = await Dish.find({_id: req.params.dishId})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Getting fail!")
  }
}

// update dish by Id
exports.updateById = async (req, res) => {
  try {
    const result = await Dish.findOneAndUpdate({_id: req.params.dishId}, req.body)
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Updating fail!")
  }
}

// delete dish by Id
exports.deleteById = async (req, res) => {
  try {
    const result = await Dish.findByIdAndRemove({_id: req.params.dishId})
    return res.status(200).json("Deleted")
  } catch {
    return res.status(500).json("Deleting fail!")
  }
}