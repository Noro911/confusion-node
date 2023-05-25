const Dish = require('../node_mongoose/model/dishes')

// create new dish
exports.create = (req, res) => {
  const dish = new Dish({
    name: req.body.name,
    description: req.body.description
  })

  dish
    .save()
    .then (data => res.status(200).json(data))
    .catch(error => res.status(500).json("Creating fail!"))
}

// get dishes
exports.findAll = (req, res, next) => {
  Dish.find({})
    .then(dishes => res.status(200).json(dishes))
    .catch(next)
}