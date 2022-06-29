import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Route Test "/"', () => {
  it('should response with status 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should response a File with type HTML', async () => {
    const response = await request.get('/');
    expect(response.type).toBe('text/html');
  });
});
