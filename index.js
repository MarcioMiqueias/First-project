const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

// Controllers
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// Models
const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View Engine
app.set("view engine", "ejs");

// Static
app.use(express.static('public'));

// Body-Parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// DataBase
connection
    .authenticate()
    .then(() => {
        console.log("successful connection");
    }).catch((error) => {
        console.log(error);
    });

// Routes
app.use("/", categoriesController);

app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("Success with the server")
});