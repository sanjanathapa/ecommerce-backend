const Sequelize = require("sequelize");
const db = require("../config/db");

const order = db.define("order", {
    orderid:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
     },
     order_date:{
         type:Sequelize.DATE
     }
    })
    module.exports=order;