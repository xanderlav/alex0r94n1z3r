var db = require("../config/database");
var express = require("express");
var router = express.Router();
var Task = require("../models/Task");

router.get("/", (req, res) => 
Task.findAll()
.then(tasks => {
    console.log(tasks);
    // res.sendStatus(200);
    res.render("tasks", {
        tasks
    })
})
.catch(err => console.log(err)));

// Add a task
// router.get('/add', (req, res) => {
//     const data = {
//         userId: 1,
//         createdAt: Date.now(),
//         taskInfo: "Ajustar models Quotes",
//         taskDescription: 'Esta es la tarea que se agrega para probar funcionalidad',
//         taskChecked: false
//     }

// let { userId, taskInfo, taskDescription, createdAt,taskChecked } = data;

// // Insert into table
// Task.create({
//     userId: userId,
//     taskInfo: taskInfo,
//     taskDescription: taskDescription,
//     createdAt: createdAt,
//     taskChecked: taskChecked
// })
//     .then(tasks => res.redirect("/tasks"))
//     .catch(err => console.log(err));
// });

module.exports = router;