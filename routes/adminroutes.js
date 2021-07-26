const express= require("express");
var approute = express.Router();

var myctrl = require("../controllers/usercontroller");

approute.post('adminlogin',myctrl.adminlog);

module.exports=approute;