const Sequelize = require("sequilize");
const sequelize = require("../config/db");

const customerlogin = sequelize.define("customerlogin", {
    customerID:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    customername:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    },
})
module.exports=customerlogin;