const request = require('supertest');
const express = require('express');
const { initDb } = require('../db');
const { logger } = require('../logger');
const { syncMenu } = require('../sync');
const app = express();

jest.mock('./sync');
jest.mock('./logger');

app.get('/trigger-sync', async (req, res) => {
    try {
        await syncMenu();
        res.status(200).send('Menu synced successfully');
    } catch (error) {
        logger.error('Error syncing menu:', error);
        res.status(500).send('Error syncing menu');
    }
});

describe('API Endpoints', () => {
    beforeAll(async () => {
        await initDb();
    });

    test('GET /trigger-sync should sync menu data successfully', async () => {
        syncMenu.mockResolvedValue();

        const response = await request(app).get('/trigger-sync');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Menu synced successfully');
    });

    test('GET /trigger-sync should handle errors', async () => {
        syncMenu.mockRejectedValue(new Error('Failed to sync menu'));

        const response = await request(app).get('/trigger-sync');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Error syncing menu');
    });
});
