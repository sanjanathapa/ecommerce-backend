 const model = require("../Models");
 const Sequelize = require("sequelize");
 const bcrypt= require("bcrypt");
 const db = require("../config/db");
 const passport= require("passport");
 require("../config/passport");
 const jwt = require("jsonwebtoken");
const customerlogin = require("../Models/customerslogin.model");
 //const adminlogin = model.adminlogin;
 const customerslogin = model.customerslogin;
 const customersdata = model.customersdata;
 //const productdetail = model.productdetail;
// const orderdetail = model.orderdetail;


 
//registering Customers
exports.customerreg= async (req,res)=>{
    const password= req.body.password;
    const epassword = await bcrypt.hash(password,10)
    console.log(epassword)
    const userdata={
        customerID:req.body.customerID,
        customername:req.body.customername,
        password:epassword,
        email:req.body.email,
        gender:req.body.gender
    }
    customerslogin.create(userdata)
    .then((data)=>{
        return res.status(200).send({
            status:200,
            data:data,
            message:"Registered Successfully"
        })
    }).catch((error)=>{
        return res.status(401).json({
            message:"Error in Registering",
            success:false,
            error:error.message
        })
    })

}
//customer login
module.exports.login=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) res.status(404).json(err);
        if(user) return res.status(200).json({
            
            "token":jwt.sign({id:user.customerID},
                "SECRETKEY007",
                {
                    expiresIn:"20m"
                }),
                data:user.customerID,
        })

        if(info) return res.status(401).json(info) 
    })(req,res,next);
}

//Enter details of the registered customers  
module.exports.userdata=(req,res)=>{
    console.log(id.id)
    const details = {
       customerID : id.id, 
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       address: req.body.address,
       city: req.body.city,
       state:req.body.state,
       zipcode:req.body.zipcode,
       phone_number: req.body.phone_number
    }
    customersdata.create(details).then((data)=>{
        return res.status(200).send({
            status:200,
            data:data,
            message: "user details has been filled"
        }).catch((err)=>{
            return res.status(401).send({
                status:400,
                success:false,
                err:err.message
            })
        })

    })
}

//to fetch all the users userdata or to fetch details by a particular user or customer
module.exports.getuserdetail = (req,res)=>{
    return customersdata.findOne({where:{customerID:id.id}}).then((data)=>{
        res.status(200).send({
            success:true,
            message:"Your Record Found",
            data:data
        })
    }).catch((err)=>{
        res.status(401).send({
            success:"error in finding records of user",
            error:err.message
        })
    })
}

//edit or update the registered userdetail
module.exports.edituserdata = async (req,res)=>{
    try{
        const edit_userdata = await customersdata.update({
            customerID:req.body.customerID,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zipcode:req.body.zipcode,
            phone_number:req.body.phone_number
        }, {where:{customerID:id.id}});
        return res.status(200).send({
            user:edit_userdata,
            message:"userdetail is updated"
        })
    }catch(error){
        return res.status(400).send({
            message:"error while updating",
            status:400,
            error:error.message
        })
    }

}

//delete the customer (customer or admin?)
module.exports.delete_customer= async (req,res)=>{
    const delete_customer=await 
    customerlogin.destroy({where:{customerID:req.params.customerid}})
    res.send({
        message:"customer deleted",
        data:delete_customer
    })
    .catch(err=>{
        res.send(err)
    })
}

