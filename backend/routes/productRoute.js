const express = require("express")
const authentication =require("../middleware/authentication")
const authorization=require("../middleware/authorization")

// Import product controller
const {addProduct,getByCategory,productById}= require("../controllers/product")


// Create product router
const productRouter = express.Router()


productRouter.post("/newproduct",authentication,authorization("Add_product"),addProduct )
productRouter.get("/productsByCategory/:categoryId",getByCategory)
productRouter.get("/productById/:id",productById)








module.exports= productRouter