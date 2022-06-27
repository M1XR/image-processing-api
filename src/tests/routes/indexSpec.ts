import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Endpoint Test "/api"', () => {
  it('should have a response status of 200', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('should send a Response', async () => {
    const responseText =
      'For rezising Image, please use the following Endpoint, provided with filename, width and height: https://localhost:3000/api/image/';
    const response = await request.get('/api');
    expect(response.text).toBe(responseText);
  });
});
