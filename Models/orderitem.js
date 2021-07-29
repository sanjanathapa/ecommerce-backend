const Sequelize = require("sequelize");
const db = require("../config/db");

const orderitem = db.define("orderitem", {
    orderid:{
        type:Sequelize.INTEGER,
     },
     productid:{
         type:Sequelize.INTEGER,
     },
     product_description:{
         type:Sequelize.STRING
     }
})
module.exports=orderitem;