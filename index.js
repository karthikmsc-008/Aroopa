const express = require("express");
const sequelize = require("./dbconfig");
const bodyparser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const Profile = require("./model");
sequelize.sync({ force: true }).then(async () => {
  console.log("db is ready...");
});
const routes = require("./route");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", routes.routes);
app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => {
  res.send("Hello world...");
});
