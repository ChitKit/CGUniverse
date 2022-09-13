module.exports = {
  async up(queryInterface, Sequelize) {
    const modelArr = [
      {
        name: 'Мина',
        path: '/models/bomb.glb',
        pic: '/img_models/bomb_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Костяной нож',
        path: '/models/bone_knife.glb',
        pic: '/img_models/bone_knife_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фэнтези щит',
        path: '/models/fantasy_shield.glb',
        pic: '/img_models/fantasy_shield_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фэнтези меч',
        path: '/models/fantasy_styled_sword.glb',
        pic: '/img_models/fantasy_styled_sword_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Меч из final fantasy',
        path: '/models/final_fantasy_sword.glb',
        pic: '/img_models/final_fantasy_sword_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Меч из аниме местер меча онлайн',
        path: '/models/sao_sword.glb',
        pic: '/img_models/sao_sword_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ураззиэль',
        path: '/models/urrizel.glb',
        pic: '/img_models/urrizel_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Меч ведьмака',
        path: '/models/witcher_sword.glb',
        pic: '/img_models/witcher_sword_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Топор из игры World of warcraft',
        path: '/models/wow_axe.glb',
        pic: '/img_models/wow_axe_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Колона из Genshin Impact',
        path: '/models/genshin_column.glb',
        pic: '/img_models/genshin_column_pic.png',
        user_id: 1,
        categ_id: 3,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фонарный столб из Genshin Impact',
        path: '/models/genshin_light.glb',
        pic: '/img_models/genshin_light_pic.png',
        user_id: 1,
        categ_id: 3,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Огурец',
        path: '/models/sample_cucumber.glb',
        pic: '/img_models/sample_cucumber_pic.png',
        user_id: 1,
        categ_id: 2,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вагонетка',
        path: '/models/rail_trolley.glb',
        pic: '/img_models/rail_trolley_pic.png',
        user_id: 1,
        categ_id: 4,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Минерал',
        path: '/models/ore.glb',
        pic: '/img_models/ore_pic.png',
        user_id: 1,
        categ_id: 7,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('UserModels', modelArr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
