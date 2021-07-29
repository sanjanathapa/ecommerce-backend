const Sequelize = require("sequelize");
const db = require("../config/db");

const adminlogin = db.define("adminlogin", {
    adminID:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    adminname:{
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
})
module.exports=adminlogin;