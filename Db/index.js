const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose
    .connect(
        process.env.DATABASE_URL
    )
    .then(()=>console.log("Connected to db"))
    .catch((err)=> console.log(err));

app.listen(process.env.NODE_PORT, () => console.log("Server is running"));