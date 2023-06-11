const passport = require('passport')
const User = require('../node_mongoose/model/user')
const authenticate = require('../auth')

// add new user
exports.create = (req, res) => {
  User.register({username: req.body.username}, req.body.password, async (err, user) => {
    if (err) {
      res.status(500).json(err)
    } else {
      try {
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.admin = req.body.admin
        const result = await user.save()
        passport.authenticate('local')(req, res, () => {
          return res.status(200).json(result)
        })
      } catch (error) {
        return res.status(500).json(error)
      }
    }
  })
}

// login
exports.login = async (req, res) => {
  return res.status(200).json("Login successful!")
}