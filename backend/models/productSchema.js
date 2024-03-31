const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String , required: true },
    price: { type: String, required: true },
    img: { type: String },
    color: { type: String},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" ,required: true },
});

module.exports = mongoose.model("Product", productSchema);