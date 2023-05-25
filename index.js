const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionRouter");
const leaderRouter = require("./routes/leaderRouter");
const db = require("./node_mongoose/index");

// Connect database
db.connect();

app.use(morgan("combined"));
app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promotionRouter);
app.use("/leaders", leaderRouter);

app.listen(port, () => console.log("listen"));
