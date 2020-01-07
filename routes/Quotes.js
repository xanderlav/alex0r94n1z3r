var db = require("../config/database");
var express = require("express");
var router = express.Router();
var Quote = require("../models/Quote");

router.get("/", (req, res) => 
Quote.findAll()
.then(quotes => {
    console.log(quotes);
    res.render("Quotes", {
        quotes
    })
})
.catch(err => console.log(err)));

// Add a Quote
// router.get('/add', (req, res) => {
//     const data = {
//         userId: 1,
//         createdAt: Date.now(),
//         QuoteInfo: "Ajustar models Quotes",
//         QuoteDescription: 'Esta es la tarea que se agrega para probar funcionalidad',
//         QuoteChecked: false
//     }

// let { userId, QuoteInfo, QuoteDescription, createdAt,QuoteChecked } = data;

// // Insert into table
// Quote.create({
//     userId: userId,
//     QuoteInfo: QuoteInfo,
//     QuoteDescription: QuoteDescription,
//     createdAt: createdAt,
//     QuoteChecked: QuoteChecked
// })
//     .then(Quotes => res.redirect("/Quotes"))
//     .catch(err => console.log(err));
// });

module.exports = router;