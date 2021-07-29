const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const customerlogin = sequelize.define("customerlogin", {
    customerid:{
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
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    },
    gender:{
        type:Sequelize.STRING
    },
})
module.exports=customerlogin;