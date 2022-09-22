const express = require("express");
const data_routes = require("./route");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.connect(
  "mongodb://localhost:27017/project?readPreference=primary&directConnection=true&ssl=false",
  { useNewUrlParser: true }
);
const con = mongoose.connection;
app.use(express.json());
app.use(cors({ credentials: true, origin: true, exposedHeaders: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", data_routes);
try {
  con.on("open", () => {
    console.log("Database Connected!");
  });
} catch (error) {
  console.log("Error: " + error);
}

app.listen(5000, () => {
  console.log("Server started!");
});
