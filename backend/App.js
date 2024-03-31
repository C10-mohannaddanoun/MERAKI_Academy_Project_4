const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Import Routers
const roleRouter = require("./routes/roleRoute")
const categoryRouter = require("./routes/categoryRoute")
const productRouter = require("./routes/productRoute")
const userRouter=require("./routes/userRoute")


// Routes Middleware
app.use("/role",roleRouter)
app.use("/category",categoryRouter)
app.use("/product",productRouter)
app.use("/user",userRouter)








// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
