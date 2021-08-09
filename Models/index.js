const Sequelize = require("sequelize");
const db = require("../config/db");

const model={}

model.Sequelize=Sequelize
model.db=db

model.adminlogin = require("../Models/admin.model");
model.customerslogin = require("../Models/customerslogin.model");
model.customersdata = require("../Models/customersdata.model");
model.productdetail = require("../Models/productdetail");
model.orderitem = require("../Models/orderitem");
model.order = require("../Models/order")

model.customerslogin.hasOne(model.customersdata,{
    foreignKey:'customerID'
})
model.adminlogin.hasMany(model.productdetail,{
    foreignKey:'adminID'
})
model.customerslogin.hasMany(model.order, {
    foreignKey:'customerID'
})
model.order.hasMany(model.orderitem, {
    foreignKey:'orderid'
})
module.exports=model;