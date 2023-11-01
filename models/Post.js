// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Comment = require('./Comment'); // Import the Comment model

const Post = sequelize.define('Post', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Establish an association
Post.hasMany(Comment, { foreignKey: 'postId' }); // Change 'PostId' to 'postId'
Comment.belongsTo(Post, { foreignKey: 'postId' }); // Change 'PostId' to 'postId'

module.exports = Post;
