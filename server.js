var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

// DB
var db = require("./config/database");
db.authenticate()
.then(() => console.log("Database is now connected..."))
.catch(err => console.log(`Error: ` + err));

var app = express();
app.get("/", (req, res) => res.send("Index from serverdotjs"));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

const PORT = process.env.PORT || 5000;

// Task routes
app.use("/tasks", require("./routes/Tasks"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));