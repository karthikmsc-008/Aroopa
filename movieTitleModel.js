const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  data: {
    type: [],
  },
});

const vaccinelots_model = new mongoose.model("vaccinelots", schema);

module.exports = vaccinelots_model;
