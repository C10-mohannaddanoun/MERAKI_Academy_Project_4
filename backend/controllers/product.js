const productModel = require("../models/productSchema");

// *****************************************************************************************

const addProduct = (req, res) => {
  const { title, description, price, img, color, owner, category } = req.body;

  const newproduct = new productModel({
    title,
    description,
    price,
    img,
    color,
    owner,
    category,
  });

  newproduct
    .save()
    .then((result) => {
      res.status(201).json({
        succsses: true,
        message: `product Added Successfully `,
        Product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// ***********************************************************************************************************
const getByCategory = (req, res) => {
  const { categoryId } = req.params;
  productModel
    .find({ category: categoryId })
    .populate("category")
    .populate("owner")
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `products by category`,
          Categoryes: result,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No products Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// *************************************************************************************************************
const productById = (req, res) => {
  const { id } = req.params;
  
  productModel
    .findById({ _id: id })
    .then((result) => {
      if (!result) {
        res.status(403).json({
          success: false,
          message: `Retry Again`,
        });
      } else {
        res.status(200).json({
          succsses: true,
          message: `product by id`,
          Product:result
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// *************************************************************************************************************

const updateProduct = (req, res) => {
  const {Id}  = req.params;

  productModel
    .findByIdAndUpdate({_id: Id }, req.body, { new: true })
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `product not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `product updated`,
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// *****************************************************************************************************************
const deleteProduct=(req,res)=>{

  const {ID}=req.params

  productModel
  .findByIdAndDelete(ID)

.then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `product not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `product deleted`,
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });










}
module.exports = { addProduct, getByCategory, productById,updateProduct,deleteProduct};
