const userModel=require("../models/userSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// ********************************************************************************************************
const register =(req,res)=>{

const {userName,age,phoneNumber,email,password,fav,role}= req.body

const newUser= new userModel({userName,age,phoneNumber,email,password,fav,role})

newUser
.save()
.then((result)=>{
    res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        user: result

})

}).catch((err)=>{

    res.status(409).json({
        success: false,
        message: `The email already exists`,
       
      });
      console.log(err)
})

}

// ***************************************************************************************
const login =(req,res)=>{

    const email = req.body.email.toLowerCase()
    const password= req.body.password

    userModel
    .findOne({email})
    .populate("role")
    .then(async (result)=>{
        if(!result){
            return res.status(403).json({
                success :false ,
                message: `The email doesn't exist or The password you’ve entered is incorrect`
            })
        } try{
            const valid = await bcrypt.compare(password,result.password)
            if (!valid){
                return res.status(403).json({
                    success :false ,
                    message: `The email doesn't exist or The password you’ve entered is incorrect`
                })
            }
            const payLoad ={
                UserId : result._id,
                UserName:result.userName,
                role:result.role
            }
            const options = {
                expiresIn: "60m",
              };

              const token =jwt.sign(payLoad,process.env.SECRET,options)
              res.status(200).json({
                success: true,
                message: `Valid login credentials`,
                token: token,
              });

        }catch (error) {
            throw new Error(error.message);
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

// *****************************************************************************************************

const addFav = (req,res)=>{
const id= req.token.UserId
const{Fav}=req.body

userModel
.findByIdAndUpdate({_id:id},{$push:{fav:Fav}},{new:true})
.then((result)=>{
    console.log(result);
    res.status(200).json({
        success:true,
        message:`add to fav is done`
        
        
    })
}).catch((err)=>{
    res.status(500).json({
        success:false,
        message:`server error`,
        err:err.message
    })
})



}

// ************************************************************************************************************
const removeFav = (req,res)=>{
    const id= req.token.UserId
    const{Fav}=req.body
    
    userModel
    .findByIdAndUpdate({_id:id},{$pull:{fav:Fav}},{new:true})
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            success:true,
            message:`Product removed from favorites`
            
            
        })
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:`server error`,
            err:err.message
        })
    })
    
    
    
    }

module.exports = {register,login,addFav,removeFav}

