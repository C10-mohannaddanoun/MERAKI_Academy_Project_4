const express = require("express")
const authentication =require("../middleware/authentication")
const authorization=require("../middleware/authorization")

// Import product controller
const {addProduct,getByCategory,productById,updateProduct}= require("../controllers/product")


// Create product router
const productRouter = express.Router()


productRouter.post("/newproduct",authentication,authorization("Add_product"),addProduct )
productRouter.get("/productsByCategory/:categoryId",getByCategory)
productRouter.get("/productById/:id",productById)
productRouter.put("/updateProduct/:Id",authentication,authorization("Update_product"),updateProduct)








module.exports= productRouter