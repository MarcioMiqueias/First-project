const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// 1 -> M
Category.hasMany(Article);
// 1 -> 1
Article.belongsTo(Category);

//Article.sync({force: true});

module.exports = Article;