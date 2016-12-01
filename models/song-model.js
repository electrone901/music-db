const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Genre = require('./genre-model')

var Song = sequelizeConnection.define('song', {
  title: {
  	type: Sequelize.STRING, 
  	validate: {is: /^[a-zA-Z0-9]{1,250}$/} 
  },
  youtube_url: {
  	type: Sequelize.STRING,
  	validate: {isURL: true, is: /^[a-zA-Z]{1,100}$/} 
  }
});

Song.belongsTo(Artist);
Song.belongsToMany(Genre, {through 'song-genre'})

module.exports = Song;
