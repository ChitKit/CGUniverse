const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserModel, User }) {
      this.belongTo(User, { foreignKey: 'user_id' });
      this.belongTo(UserModel, { foreignKey: 'model_id' });
    }
  }
  CartItem.init({
    model_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};