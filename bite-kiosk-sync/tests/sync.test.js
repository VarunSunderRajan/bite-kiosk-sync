const axios = require('axios');
const { syncMenu } = require('../sync');
const { Section, Item, ModGroup, Mod, Discount, OrderType } = require('../db');
const { initDb } = require('../db');

jest.mock('axios');

describe('Sync Menu', () => {
    beforeAll(async () => {
        await initDb();
    });

    test('should sync menu data successfully', async () => {
        const mockData = {
            sections: [{ id: '1', name: 'Section 1', itemIds: '1', magicCopyKey: 'key', imageUrl: 'url' }],
            items: [{ id: '1', name: 'Item 1', price: '10', modGroupIds: '1', magicCopyKey: 'key', imageUrl: 'url' }],
            modGroups: [{ id: '1', name: 'ModGroup 1', modIds: '1', maxMods: 1, minMods: 0 }],
            mods: [{ id: '1', name: 'Mod 1', modGroupIds: '1', price: 5 }],
            discounts: [{ id: '1', name: 'Discount 1', amount: 10, rate: 0.1, couponCode: 'code' }],
            orderTypes: [{ id: '1', name: 'OrderType 1' }]
        };

        axios.get.mockResolvedValue({ data: mockData });

        await syncMenu();

        const sections = await Section.findAll();
        const items = await Item.findAll();
        const modGroups = await ModGroup.findAll();
        const mods = await Mod.findAll();
        const discounts = await Discount.findAll();
        const orderTypes = await OrderType.findAll();

        expect(sections.length).toBe(1);
        expect(items.length).toBe(1);
        expect(modGroups.length).toBe(1);
        expect(mods.length).toBe(1);
        expect(discounts.length).toBe(1);
        expect(orderTypes.length).toBe(1);
    });

    test('should handle errors while syncing menu data', async () => {
        axios.get.mockRejectedValue(new Error('Failed to fetch menu'));

        await expect(syncMenu()).rejects.toThrow('Failed to fetch menu');
    });
});
