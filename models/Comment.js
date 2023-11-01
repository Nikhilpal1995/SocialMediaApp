// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Comment = sequelize.define('Comment', {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Comment;
