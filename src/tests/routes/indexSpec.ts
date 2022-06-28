import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Server Test Route "/api"', () => {
  it('should send a status of 200', async () => {
    const response = await request.get('/api');
    expect(response.status).toEqual(200);
  });

  it('should send a Response', async () => {
    const response = await request.get('/api');
    expect(response).toBeTruthy();
  });

  it('should send a File with type HTML', async () => {
    const response = await request.get('/api');
    expect(response.type).toEqual('text/html');
  });

  it('should send a status of 404 if endpoint not exists', async () => {
    const response = await request.get('/api/9');
    expect(response.status).toEqual(404);
  });

  it('should send a Response if endpoint not exists', async () => {
    const response = await request.get('/api/9');
    expect(response).toBeTruthy();
  });

  it('should send a File with type HTML if endpoint not exists', async () => {
    const response = await request.get('/api/9');
    expect(response.type).toEqual('text/html');
  });
});
