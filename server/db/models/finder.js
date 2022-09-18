const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Finder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      // define association here
    }
  }
  Finder.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    images: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Finder',
  });
  return Finder;
};
