import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Route Test "/api"', () => {
  it('should send a status of 200', async () => {
    const response = await request.get('/api/');
    expect(response.status).toEqual(200);
  });

  it('should send a File with type HTML', async () => {
    const response = await request.get('/api/');
    expect(response.type).toEqual('text/html');
  });
});
