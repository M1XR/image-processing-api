import supertest from 'supertest';
import app from '../../../server';
import * as fs from 'fs';

const request = supertest(app);

describe('Server Test Route "/api/image"', () => {
  afterAll(() => {
    fs.unlink('./images/thumb/bridge_100x100.jpg', (err) => {
      if (err) throw err;
    });
  });

  describe('Correct Endpoint Request', () => {
    describe('Image NOT exist in thumb-Folder', () => {
      it('should send a status of 200', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.status).toEqual(200);
      });

      it('should send a File with type JPG', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.type).toEqual('image/jpeg');
      });
    });

    describe('Image exists in Thumb-Folder', () => {
      it('should send a status of 200', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.status).toEqual(200);
      });

      it('should send a File with type JPG', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.type).toEqual('image/jpeg');
      });
    });
  });

  describe('Incorrect Endpoint Request', () => {
    it('should send a status of 404', async () => {
      const response = await request.get('/api/image?XYZ');
      expect(response.status).toEqual(404);
    });

    it('should throw an error', async () => {
      const response = await request.get('/api/image?XYZ');
      expect(response.error).toThrow();
    });
  });
});
