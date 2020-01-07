var Sequelize = require("sequelize");
var db = require("../config/database");

var Quote = db.define('quotes_fx',{
        quoteId:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        quoteText: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        userId: {
            type: Sequelize.INTEGER
        }
    },{freezeTableName: true})

module.exports = Quote;