const { Sequelize } = require('sequelize');
const { initDb, Section, Item, ModGroup, Mod, Discount, OrderType } = require('../db');

describe('Database Models', () => {
    let sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false
        });

        await sequelize.authenticate();
    });

    beforeEach(async () => {
        await initDb();
    });

    afterAll(async () => {
        await sequelize.close();
    });

    test('Section model should be defined', () => {
        expect(Section).toBeDefined();
    });

    test('Item model should be defined', () => {
        expect(Item).toBeDefined();
    });

    test('ModGroup model should be defined', () => {
        expect(ModGroup).toBeDefined();
    });

    test('Mod model should be defined', () => {
        expect(Mod).toBeDefined();
    });

    test('Discount model should be defined', () => {
        expect(Discount).toBeDefined();
    });

    test('OrderType model should be defined', () => {
        expect(OrderType).toBeDefined();
    });
});
