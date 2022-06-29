import supertest from 'supertest';
import app from '../../../server';
import * as fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Endpoint Test "/api/image"', () => {
  afterAll(() => {
    fs.unlink('./assets/images/thumb/bridge_100x100.jpg', (err) => {
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

      it('should save the processed File in thumb-Folder', () => {
        const pathToFile = path.join(__dirname, '../../../../assets/images/thumb', 'bridge_100x100.jpg');
        expect(fs.existsSync(pathToFile)).toBeTruthy();
      });
    });

    describe('Image exist in thumb-Folder', () => {
      it('should send a status of 200', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.status).toEqual(200);
      });

      it('should send a File with type JPG', async () => {
        const response = await request.get('/api/image?filename=bridge&width=100&height=100');
        expect(response.type).toEqual('image/jpeg');
      });
    });

    describe('Incorrect Endpoint Request', () => {
      it('should send a status of 200', async () => {
        const response = await request.get('/api/image?XYZ');
        expect(response.status).toEqual(200);
      });

      it('should send a response text', async () => {
        const response = await request.get('/api/image?XYZ');
        expect(response.text).toBe('Missing URL Parameters! Filename: missing, Width: missing, Height: missing');
      });
    });

    describe('Image NOT exist in Full-Folder', () => {
      it('should send a status of 200', async () => {
        const response = await request.get('/api/image?filename=xyz&width=1&height=1');
        expect(response.status).toEqual(200);
      });

      it('should send a response text', async () => {
        const response = await request.get('/api/image?filename=xyz&width=1&height=1');
        expect(response.text).toBe(
          'A File with name xyz.jpg not exist in "root/assets/images/full/"! Please choose an existing File to process.'
        );
      });
    });
  });
});
