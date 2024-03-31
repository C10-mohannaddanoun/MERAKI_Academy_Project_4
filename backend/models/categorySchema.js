const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  type: { type: String, required: true },
  img:  {type:String} 
});


const categoryModel =mongoose.model("Category", categorySchema);
module.exports = categoryModel
