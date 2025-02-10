'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.TEXT
    },
    published: {
      type: Sequelize.DATE
    },
    author_id: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};