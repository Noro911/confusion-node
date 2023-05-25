const Leader = require('../node_mongoose/model/leaders')

//Create leader
exports.create = (req, res) => {
  const leader = new Leader({
    name: req.body.name,
    image: req.body.image,
    designation: req.body.designation,
    abbr: req.body.abbr,
    description: req.body.description,
    featured: req.body.featured
  })

  leader
    .save()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json('Creating fail'))
}