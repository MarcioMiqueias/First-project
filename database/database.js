const Sequelize = require("sequelize");

const connection = new Sequelize('techview','root','Olamundo==741==',{
    host:'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;