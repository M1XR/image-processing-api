import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Endpoint Test "/"', () => {
  it('should have a response status of 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should send a Response', async () => {
    const responseText = 'Server runs at Port 3000';
    const response = await request.get('/');
    expect(response.text).toMatch(responseText);
  });
});
