const Promotion = require('../node_mongoose/model/promotions')

//Create new promotion
exports.create = (req, res) => {
  const promotion = new Promotion({
    name: req.body.name,
    image: req.body.image,
    label: req.body.label,
    price: req.body.price,
    description: req.body.description,
    featured: req.body.featured
  })

  promotion
    .save()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json("Creating fail!"))
}