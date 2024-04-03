const express = require("express")
const authentication =require("../middleware/authentication")

// Import product controller
const {addProduct,getByCategory,productById}= require("../controllers/product")


// Create product router
const productRouter = express.Router()


productRouter.post("/newproduct",authentication,addProduct )
productRouter.get("/productsByCategory/:categoryId",getByCategory)
productRouter.get("/productById/:id",productById)








module.exports= productRouter