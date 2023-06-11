const express = require("express");
const morgan = require("morgan");
// import passport, express-session
const passport = require("passport")
const session = require("express-session")

const app = express();
const port = 3000;

const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionRouter");
const leaderRouter = require("./routes/leaderRouter");
const userRouter = require("./routes/userRouter")
const db = require("./node_mongoose/index");

// Connect database
db.connect();

app.use(morgan("combined"));
app.use(express.json());
// auth
app.use(passport.initialize())
app.use(
  session({
    secret:'authenticationSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true}
  })
)

app.use("/dishes", dishRouter);
app.use("/promotions", promotionRouter);
app.use("/leaders", leaderRouter);
app.use("/user", userRouter)

app.listen(port, () => console.log("listen"));
