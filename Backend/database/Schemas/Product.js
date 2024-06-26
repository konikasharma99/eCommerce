const mongoose = require("mongoose");

const prodSchema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});
module.exports = mongoose.model("products", prodSchema);

//6676d83af6183f8a5108ee61
