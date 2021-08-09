const express= require("express");
var approute = express.Router();
const verify= require("../config/jwt");
const verifyy = require("../config/adminjwt");

var myctrl = require("../controllers/usercontroller");
var myctrll = require("../controllers/admincontroller");


approute.post('/adminreg', myctrll.adminreg);
approute.post('/Adminlogin', myctrll.Adminlogin);
approute.get('/getcustomerdetail', verifyy.verfiyadmintoken, myctrll.getcustomerdetail)
approute.post('/prodetail', verifyy.verfiyadmintoken, myctrll.prodetail);
approute.get('/getprodetail', myctrll.getprodetail);


approute.post('/customerreg',myctrl.customerreg);
approute.post('/login', myctrl.login);
approute.post('/userdata', verify.verfiytoken, myctrl.userdata);
approute.get('/getuserdetail', verify.verfiytoken, myctrl.getuserdetail);
approute.put('/edituserdata', verify.verfiytoken, myctrl.edituserdata);
approute.delete('/deletecustomer', verify.verfiytoken, myctrl.deletecustomer);
approute.get('/getprodetail', myctrl.getprodetail);

module.exports=approute;
