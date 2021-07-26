const Sequelize = require("sequelize");
const db = require("../config/db");

const orderdetail = db.define("orderdetail", {
    orderid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
     },
})
module.exports=orderdetail;