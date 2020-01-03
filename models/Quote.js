var Sequelize = require("sequelize");
var db = require("../config/database");

var Quote = db.define('quote_fx',{
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