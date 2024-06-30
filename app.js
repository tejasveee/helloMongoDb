const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoute = require("./routes/userRoute.js");
app.use("/api/user", userRoute); // declaring route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//localhost:27017/UserAppDB
mongodb: mongoose.connect("mongodb://localhost:27017/UserAppDB");
