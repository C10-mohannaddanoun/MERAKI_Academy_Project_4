const express = require("express")
const authentication = require("../middleware/authentication")

// Import user controller
const {register,login,addFav,removeFav}=require("../controllers/user")

// Create user router
const userRouter = express.Router()


userRouter.post("/register",register )
userRouter.post("/Login",login)
userRouter.put("/Fav",authentication,addFav)
userRouter.put("/deleteFav",authentication,removeFav)








module.exports= userRouter