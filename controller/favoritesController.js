const Favorite = require("../node_mongoose/model/favorite");

// get all favorites
exports.findAll = async (req, res) => {
  try {
    const result = await Favorite.find({}).populate("user");
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Getting fail!");
  }
};

//add new favorite
exports.addOne = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ user: req.user._id }).populate(
      "dishes"
    );
    if (favorite) {
      const isExisted = favorite.dishes.filter(
        (dish) => dish._id == req.body._id
      )[0];
      if (isExisted == null) {
        favorite.dishes.push(req.body._id);
        favorite.save();
      } else {
        return res.status(500).json("Existed");
      }
    } else {
      const newFavorite = new Favorite({
        user: req.user._id,
        dishes: [{ _id: req.body._id }],
      });
      newFavorite.save()
      return res.status(200).json(newFavorite);
    }
  } catch (error) {
    return res.status(500).json("Adding fail!");
  }
};

//delete user from this list
exports.deleteUser = async (req, res) => {
  try {
    const result = await Favorite.findOneAndDelete({ user: req.user._id });
    return res.status(200).json("Deleted");
  } catch (error) {
    return res.status(500).json("Deleting fail!");
  }
};

//add new dish to list
exports.addDish = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({user: req.user._id})
    const isExisted = favorite.dishes.filter(dish => dish._id == req.params.dishId)[0]
    if (isExisted == null) {
      favorite.dishes.push(req.params.dishId)
      favorite.save()
    } else {
      return res.status(500).json('Existed')
    }
    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(500).json("Adding fail!");
  }
}

exports.deleteDish = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({user: req.user._id})
    const index = favorite.dishes.indexOf(req.params.dishId)
    favorite.dishes.splice(index, 1)
    favorite.save()
    return res.status(200).json("Deleted");
  } catch (error) {
    return res.status(500).json("Deleting fail fail!");
  }
}
