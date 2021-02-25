const Sequelize = require('sequelize');

const postsModel = require('./models/posts');

const sequelize = new Sequelize('alkemy_db', 'root', 'basepass', {
    host: 'localhost',
    dialect: 'mysql'

});

const posts = postsModel(sequelize, Sequelize); 

sequelize.sync({ force: false })
    .then( () => {
        console.log('Tablas Sincronizadas')
    })

    module.exports = {
         posts
    }