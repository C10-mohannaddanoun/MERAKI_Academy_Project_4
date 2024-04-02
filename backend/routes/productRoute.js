const express = require("express")
const authentication =require("../middleware/authentication")

// Import product controller
const {addProduct,getByCategory}= require("../controllers/product")


// Create product router
const productRouter = express.Router()


productRouter.post("/newproduct",authentication,addProduct )
productRouter.get("/:categoryId",getByCategory)








module.exports= productRouter