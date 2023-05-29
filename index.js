const express = require("express");
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const errorRouter = require("./routes/error");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./middlewares/logger");
const connectDatabase = require("./database/connection");
const cookieParser = require('cookie-parser')
//Setting up ENV in our project
require("dotenv").config();

const app = express();

//DB Connection
connectDatabase();

//Global middleware
app.use(cors());
app.use(logger);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

// Link the routes file
app.use(homeRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use(errorRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
