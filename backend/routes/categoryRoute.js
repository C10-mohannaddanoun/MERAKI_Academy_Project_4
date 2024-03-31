const express = require("express")

// Import category controller
const {createCategory,getAllCategory}= require("../controllers/category")

// Create category router
const categoryRouter = express.Router()


categoryRouter.post("/newcategory",createCategory )
categoryRouter.get("/AllCategoryes",getAllCategory)








module.exports= categoryRouter