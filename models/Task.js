var Sequelize = require("sequelize");
var db = require("../config/database");

var Task = db.define('tasks_fx',{
        taskInfo: {
            type: Sequelize.TEXT
        },
        taskDescription: {
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

module.exports = Task;