const express = require("express")

// Import user controller
const {register,login,addFav}=require("../controllers/user")

// Create user router
const userRouter = express.Router()


userRouter.post("/register",register )
userRouter.post("/Login",login)
userRouter.put("/Fav/:id",addFav)








module.exports= userRouter