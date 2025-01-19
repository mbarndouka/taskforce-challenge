import request from 'supertest';
import app from '../../../app';

describe('Get /welcome', () => {
  it("Should return 'Welcome to docs'", async () => {
    const response = await request(app).get('/api/v1/welcome');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to The Docs Test');
  });
});
