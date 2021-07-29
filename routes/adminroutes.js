const express= require("express");
var approute = express.Router();
const verify= require("../config/jwt");
const verifyy = require("../config/adminjwt");

var myctrl = require("../controllers/usercontroller");
var myctrll = require("../controllers/admincontroller");


approute.post('/adminreg', myctrll.adminreg);
approute.post('/Adminlogin', myctrll.Adminlogin);
approute.post('/prodetail', verifyy.verfiyadmintoken, myctrll.prodetail);

approute.post('/customerreg',myctrl.customerreg);
approute.post('/login', myctrl.login);
approute.post('/userdata', verify.verfiytoken, myctrl.userdata);
approute.get('/getuserdetail', verify.verfiytoken, myctrl.getuserdetail);
approute.put('/getuserdetail', verify.verfiytoken, myctrl.getuserdetail);

module.exports=approute;
