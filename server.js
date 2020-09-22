const express = require("express");
const {config} = require("dotenv");
const cors = require("cors");

config()
require("./db");

const port = process.env.PORT || 1234

const app = express();
app.use(express.json());
app.use(cors());

const apiRoutes = require("./routes/apiRoutes")
app.use(apiRoutes)

app.get("/", function(req, res) {
    res.status(200).send("Backend is working and this project is done by Teja S")
})

app.listen(port, () => {
    console.log("server started");
})