const model = require("../Models");
const bcrypt= require("bcrypt");

const adminlogin = model.adminlogin;
 //const customerslogin = model.customerslogin;
 //const customersdata = model.customersdata;
 //const productdetail = model.productdetail;
// const orderdetail = model.orderdetail;

exports.adminreg= async (req,res)=>{
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
            message:"Admin Registered Successfully"
        })
    }).catch((error)=>{
        return res.status(401).json({
            message:"Error in Registering",
            success:false,
            error:error.message
        })
    })

}