const Sequelize = require("sequeliz");
const db = require("../config/db");

const model={}

model.Sequelize=Sequelize
model.db=db

model.adminlogin = require("../Models/admin.model");
model.customerslogin = require("../Models/customerslogin.model");
model.customersdata = require("../Models/customersdata.model");
model.productdetail = require("../Models/productdetail");
model.orderdetail = require("../Models/orderdetail");