const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Section = sequelize.define('Section', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    itemIds: DataTypes.STRING,
    magicCopyKey: DataTypes.STRING,
    imageUrl: DataTypes.STRING
});

const Item = sequelize.define('Item', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    modGroupIds: DataTypes.STRING,
    magicCopyKey: DataTypes.STRING,
    imageUrl: DataTypes.STRING
});

const ModGroup = sequelize.define('ModGroup', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    modIds: DataTypes.STRING,
    maxMods: DataTypes.INTEGER,
    minMods: DataTypes.INTEGER
});

const Mod = sequelize.define('Mod', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    modGroupIds: DataTypes.STRING,
    price: DataTypes.FLOAT
});

const Discount = sequelize.define('Discount', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    rate: DataTypes.FLOAT,
    couponCode: DataTypes.STRING
});

const OrderType = sequelize.define('OrderType', {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING
});

const initDb = async () => {
    await sequelize.sync({ force: true });
};

module.exports = {
    initDb,
    Section,
    Item,
    ModGroup,
    Mod,
    Discount,
    OrderType
};
