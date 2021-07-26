const Sequelize = require("sequelize");
const db = require("../config/db");

const customerdata = db.define("customerdata", {
    customerID:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:Sequelize.STRING
    
    },
    address:{
        type:Sequelize.INTEGER,
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