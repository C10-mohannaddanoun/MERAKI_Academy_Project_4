const express = require("express")

// Import roles controller
const {createNewRole}= require("../controllers/role")


// Create roles router
const roleRouter = express.Router()


roleRouter.post("/newRole",createNewRole)








module.exports= roleRouter