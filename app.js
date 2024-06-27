require("dotenv").config();

const express = require("express");

const cors = require('cors');

const app = express()
const dbUrl = process.env.MONGO_URI;

const ConnectDB = require("./features/db/connectDB");
const port = 3007;

const router = require("./features/router/router");
const NotFound = require("./features/middleware/NotFound");


app.use(cors())
app.use(express.json())
app.use("/app/user/",router);
app.use(NotFound)

ConnectDB(dbUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listening at port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
