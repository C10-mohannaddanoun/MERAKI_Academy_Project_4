const categoryModel = require("../models/categorySchema")


const createCategory =(req,res)=>{
const {type,img}= req.body 
const newCategory = new categoryModel({type,img})

newCategory
.save()
.then((result) => {
    res.status(201).json({
      success: true,
      message: `Category created`,
      Category: result,
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

// ************************************************************************************

const getAllCategory = (req,res)=>{


    categoryModel
    .find()
    .then((result)=>{
        if(result.length){
            res.status(200).json({
                success:true,
                message:`all categoryes`,
                Categoryes:result
            })
        }else {
            res.status(200).json({
              success: false,
              message: `No categoryes Yet`,
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

module.exports = {createCategory,getAllCategory}