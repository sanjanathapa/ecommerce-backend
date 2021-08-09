const model = require("../Models");
const bcrypt= require("bcrypt");
const passport= require("passport");
require("../config/adminpassport");
const jwt = require("jsonwebtoken");
const customerlogin = require("../Models/customerslogin.model");
//const  customerslogin  = require("../Models");


const adminlogin = model.adminlogin;
//const customerslogin = model.customerslogin;
const customersdata = model.customersdata;
const productdetail = model.productdetail;
// const orderdetail = model.orderdetail;

module.exports.adminreg= async (req,res)=>{
    const password= req.body.password;
    const encpassword = await bcrypt.hash(password,10)
    const admindata={
        adminID:req.body.adminID,
        adminname:req.body.adminname,
        password:encpassword,
        email:req.body.email,
    }
    adminlogin.create(admindata)   //detail saving in the database
    .then((data)=>{
        return res.status(200).send({
            status:200,
            data:data,
            message:"Admin Registered Successfully",
            })
    }).catch((error)=>{
        return res.status(401).json({
            message:"Error in Registering",
            success:false,
            error:error.message
        })
    })

}

//admin login
module.exports.Adminlogin=(req,res,next)=>{
    passport.authenticate('admin',(err,user,info)=>{
        if(err) res.status(404).json(err);
        if(user) return res.status(200).json({
            
            "tokenn":jwt.sign({id:user.adminID},
                "SECRETKEY1999",
                {
                    expiresIn:"20m"
                }),
                data:user.adminID,
        })

        if(info) return res.status(401).json(info) 
    })(req,res,next);
}


//productdetail
module.exports.prodetail=(req,res)=>{
    const pro_detail = {
        adminID:id.id,
        productid : req.body.productid, 
        productname: req.body.productname,
        product_description: req.body.product_description,
        productprice: req.body.productprice,
        product_image: req.body.product_image,
        productstatus:req.body.productstatus,
        product_category:req.body.product_category
     }
     productdetail.create(pro_detail).then((data)=>{
         return res.status(200).send({
             status:200,
             data:data,
             message: "product details"
         }).catch((err)=>{
             return res.status(401).send({
                 status:400,
                 success:false,
                 err:err.message
             })
         })
     })
    
}
//customers detail fetching
module.exports.getcustomerdetail= (req,res)=>{
    return customerlogin.findAll({include:customersdata}).then((result)=>{
     res.status(200).json({
        success:true,
        message:"list of the all customers",
        data:result
    })
})

.catch((error)=>{
    return res.status(404).send({
        status:400,
        message:"there is some error",
        error:error
    })
})
}

//admin viewing the product details
module.exports.getprodetail = (req,res)=>{
    return productdetail.findAll().then((data)=>{
        res.status(200).send({
            success:true,
            message:"list of products",
            data:data
        })
    }).catch((err)=>{
        res.status(401).send({
            success:"something an error",
            error:err.message
        })
    })
}