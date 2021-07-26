const Sequelize = require("sequelize");
const db = require("../config/db");
 
const productdetail = db.define('productdetail',{
    productid:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    productname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    product_description:{
        type:Sequelize.STRING
    },
    productprice:{
        type:Sequelize.INTEGER
    },
    product_image:{
        type:Sequelize.STRING
    },
    productstatus:{
        type:Sequelize.STRING,
        allowNull:false
    },
    product_category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=productdetail;