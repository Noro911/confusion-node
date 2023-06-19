const Dish = require("../node_mongoose/model/dishes");

// create new dish
exports.create = async (req, res) => {
  try {
    const dish = new Dish({
      name: req.body.name,
      description: req.body.description,
      comments: req.body.comments,
    });
    const result = await dish.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("Creating fail!");
  }
};

// get all dishes
exports.findAll = async (req, res) => {
  try {
    const result = await Dish.find({}).populate("comments.author");
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Get all fail!");
  }
};

// delete all dishes
exports.deleteAll = async (req, res) => {
  try {
    const result = await Dish.deleteMany({});
    return res.status(200).json("Removed all dishes");
  } catch {
    return res.status(500).json("Removing fail!");
  }
};

// get dish by Id
exports.getById = async (req, res) => {
  try {
    const result = await Dish.find({ _id: req.params.dishId }).populate(
      "comments.author"
    );
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Getting fail!");
  }
};

// update dish by Id
exports.updateById = async (req, res) => {
  try {
    const result = await Dish.findOneAndUpdate(
      { _id: req.params.dishId },
      req.body
    ).populate("comments.author");
    return res.status(200).json(result);
  } catch {
    return res.status(500).json("Updating fail!");
  }
};

// delete dish by Id
exports.deleteById = async (req, res) => {
  try {
    const result = await Dish.findByIdAndRemove({
      _id: req.params.dishId,
    }).populate("comments.author");
    return res.status(200).json("Deleted");
  } catch {
    return res.status(500).json("Deleting fail!");
  }
};

//get comments of dish
exports.getComments = async (req, res) => {
  try {
    const result = await Dish.findOne({ _id: req.params.dishId }).populate(
      "comments.author"
    );
    return res.status(200).json(result.comments);
  } catch (error) {
    return res.status(500).json("Getting comments fail!");
  }
};

//get comment by commentId
exports.getCommentById = async (req, res) => {
  try {
    const dish = await Dish.findOne({ _id: req.params.dishId }).populate(
      "comments.author"
    );
    if (dish.comments.id(req.params.commentId) != null) {
      res.status(200).json(dish.comments.id(req.params.commentId));
    }
  } catch (error) {
    return res.status(500).json("Getting comments fail!");
  }
};

//update comment by Id
exports.updateCommentById = async (req, res) => {
  try {
    const dish = Dish.findOne({ _id: req.params.dishId }).populate(
      "comments/author"
    );
    if (
      dish.comments.id(req.params.commentId) != null &&
      dish.comments.id(req.params.commentId).author.equals(req.user._id)
    ) {
      if (req.body.rating) {
        dish.comments.id(req.params.commentId).rating = req.body.rating;
      }
      if (req.body.comment) {
        dish.comments.id(req.params.commentId).comment = req.body.comment;
      }
      dish.save()
    }
    return req.status(200).json(dish)
  } catch (error) {
    return res.status(500).json("Updating comments fail!");
  }
};

//delete comment by Id 
exports.deleteCommentById = async (req, res) => {
  try {
    const dish = Dish.findOne({ _id: req.params.dishId }).populate(
      "comments/author"
    );
    if (
      dish.comments.id(req.params.commentId) != null &&
      dish.comments.id(req.params.commentId).author.equals(req.user._id)
    ) {
      dish.comments.id(req.params.commentId).remove()
      dish.save()
    }
  } catch (error) {
    return res.status(500).json("Deleting comments fail!");
  }
}
