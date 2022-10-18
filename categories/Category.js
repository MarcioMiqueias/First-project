const Sequelize = require("sequelize");
const connection = require("../database/database");
const Article = require("../articles/Article")

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// 1 -> M
Category.hasMany(Article);

// 1 -> 1
Article.belongsTo(Category); 

Category.sync({force: true});

module.exports = Category;
