const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      UserModel, Comment, LikeModel, OrderTap, Order, CartItem, Favorites, Finder,
    }) {
      this.hasMany(UserModel, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(LikeModel, { foreignKey: 'user_id' });
      this.hasMany(OrderTap, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'user_id' });
      this.hasMany(CartItem, { foreignKey: 'user_id' });
      this.hasMany(Favorites, { foreignKey: 'user_id' });
      this.hasMany(Finder, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.STRING,
    role: DataTypes.STRING,
    balance: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
