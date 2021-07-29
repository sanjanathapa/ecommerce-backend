const Sequelize = require("sequelize");
const db = require("../config/db");

const customerdata = db.define("customerdata", {

        firstname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:Sequelize.STRING
    
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    city:{
        type:Sequelize.STRING,
        allowNull:false
    },
    state:{
        type:Sequelize.STRING,
        allowNull:false
    },
    zipcode:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    phone_number:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports=customerdata;