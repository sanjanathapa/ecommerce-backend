const express= require("express");
var approute = express.Router();
const verify= require("../config/jwt");

var myctrl = require("../controllers/usercontroller");

//approute.post('/adminlogin',myctrl.adminlog);
approute.post('/customerreg',myctrl.customerreg);
approute.post('/login', myctrl.login);
approute.post('/userdata', verify.verfiytoken, myctrl.userdata);


approute.get('/getuserdetail', verify.verfiytoken, myctrl.getuserdetail);

module.exports=approute;