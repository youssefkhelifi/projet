const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDb = require("./Config/ConnectDb");
require("dotenv").config({ path: "./Config/.env" });
const authRoute = require("./Routes/AuthRoute");
connectDb();
const port = process.env.PORT || 9000;

app.use(express.json());
app.listen(port, (err) => {
  if (err) {
    console.log("serever failed");
  }
  console.log(`server is running on port ${port}`);
});
app.use("/api", authRoute);

var productsRouter = require('./Routes/AuthProduct');
app.use('/films', productsRouter);
var comment=require('./Routes/comment');
app.use('/comment',comment);
var order=require('./Routes/OrderRoute');
app.use('/order',order);
