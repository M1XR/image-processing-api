import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Server Test Route "/api"', () => {
  describe('Error handling', () => {
    it('should send a status of 404', async () => {
      const response = await request.get('/api/');
      expect(response.status).toEqual(404);
    });

    it('should send a File with type HTML', async () => {
      const response = await request.get('/api/');
      expect(response.type).toEqual('text/html');
    });
  });
});
