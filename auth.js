const passport = require("passport");
const LocalStraregy = require("passport-local").Strategy;
const User = require("./node_mongoose/model/user");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const config = require("./config");

passport.use(new LocalStraregy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = (user) => {
  return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(options, (payload, done) => {
    console.log("payload: ", payload);
    User.findOne({ _id: payload }).then((user) => {
      if (user) {
        return null, user;
      } else {
        return done(null, false);
      }
    });
    return done(null, payload);
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });

exports.verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    if (user.admin) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not authorized to perform this operation!");
    }
  } catch (error) {
    return res.status(500).json('Verify admin fail!')
  }
};
