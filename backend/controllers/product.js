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
const getByCategory=(req,res)=>{
const {categoryId}=req.params
productModel
.find({category:categoryId})
.populate("category")
.then((result)=>{
    if(result){
        res.status(200).json({
            success:true,
            message:`product by category`,
            Categoryes:result
        })
    }else {
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


    


}



module.exports = { addProduct,getByCategory };
