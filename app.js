const express = require("express");
const cors = require("cors");
const db = require("./services/mongodb/db");
const app = express();

//database connection
db();

app.set("port", 3000);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = app;
