module.exports = {
  async up(queryInterface, Sequelize) {
    const categoryArr = [
      {
        name: 'Оружие',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Еда и напитки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Архитектура',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Машины',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Самолеты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Обувь',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Минералы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('Categories', categoryArr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Categories', null, {});
     */
  },
};
