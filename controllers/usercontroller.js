
const db = require("../config/db");
const Admin=require("../Models/admin.model");

exports.adminlog=((req,res)=>{
    console.log("hello")
    var  adminname=req.body.adminname;
    var  password=req.body.password
Admin.find({adminname:adminname,  password:password})
    .then((result)=>{
        console.log("auth failed")
        if(result.length<1){
            res.status(404).json({
                message:"Auth Failed",
                result:result
            })
        }
        else{
            res.status(400).json({
                message: "Invalid Credentials"
            });
        }
    }).catch(err=>{
        res.json({
            error:err
        })
    })
})

