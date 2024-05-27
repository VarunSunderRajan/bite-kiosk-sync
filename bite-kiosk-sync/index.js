const express = require('express');
const { syncMenu } = require('./sync');
const { initDb } = require('./db');
const { logger } = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/trigger-sync', async (req, res) => {
    try {
        await syncMenu();
        res.status(200).send('Menu synced successfully');
    } catch (error) {
        logger.error('Error syncing menu:', error);
        res.status(500).send('Error syncing menu');
    }
});

app.listen(PORT, async () => {
    await initDb();
    logger.info(`Server is running on port ${PORT}`);
});
