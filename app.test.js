const request = require('supertest');
const server = require('./app');

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(server).get('/');
    expect(response.text).toEqual('Hello World!');
    expect(response.statusCode).toBe(200);
  });

  afterAll(done => {
    server.close(done);
  });
});
