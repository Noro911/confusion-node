const Leader = require('../node_mongoose/model/leaders')

//Create leader
exports.create = async (req, res) => {
  try {
    const leader = new Leader({
      name: req.body.name,
      image: req.body.image,
      designation: req.body.designation,
      abbr: req.body.abbr,
      description: req.body.description,
      featured: req.body.featured
    })
    const result = await leader.save()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json('Creating fail')
  }
}

// get all leaders
exports.findAll = async (req, res) => {
  try {
    const result = await Leader.find({})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Getting all fail!")
  }
}

// delete all
exports.deleteAll = async (req, res) => {
  try {
    const result = await Leader.deleteMany({})
    return res.status(200).json("Deleted all")
  } catch {
    return res.status(500).json("Deleting all fail!")
  }
}

// Get leader by Id
exports.getById = async (req, res) => {
  try {
    const result = await Leader.find({_id: req.params.leaderId})
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Getting fail!")
  }
}

// Update leader by Id
exports.updateById = async (req, res) => {
  try {
    const result = await Leader.findOneAndUpdate({_id: req.params.leaderId}, req.body)
    return res.status(200).json(result)
  } catch {
    return res.status(500).json("Updating fail!")
  }
}

// Delete by Id
exports.deleteById = async (req, res) => {
  try {
    const result = await Leader.findOneAndRemove({_id: req.params.leaderId})
    return res.status(200).json("Deleted")
  } catch {
    return res.status(500).json("Deleting fail!")
  }
}