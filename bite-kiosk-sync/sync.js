const axios = require('axios');
const { Section, Item, ModGroup, Mod, Discount, OrderType } = require('./db');
const { logger } = require('./logger');

const syncMenu = async () => {
    try {
        const locationId = 'your-location-id'; // replace with actual location ID
        const response = await axios.get(`https://bite-test-pos-production.herokuapp.com/locations/${locationId}/menu`);
        const menu = response.data;

        await Section.bulkCreate(menu.sections, { ignoreDuplicates: true });
        await Item.bulkCreate(menu.items, { ignoreDuplicates: true });
        await ModGroup.bulkCreate(menu.modGroups, { ignoreDuplicates: true });
        await Mod.bulkCreate(menu.mods, { ignoreDuplicates: true });
        await Discount.bulkCreate(menu.discounts, { ignoreDuplicates: true });
        await OrderType.bulkCreate(menu.orderTypes, { ignoreDuplicates: true });

        logger.info('Menu synced successfully');
    } catch (error) {
        logger.error('Error syncing menu:', error);
        throw error;
    }
};

module.exports = {
    syncMenu
};
