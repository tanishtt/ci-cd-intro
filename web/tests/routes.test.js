const request = require('supertest')
const app = require('../app')

describe('Default Endpoint', () => {
  it('should return status 200', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
  })
})

// tests/routes.test.js
describe('New Endpoint', () => {
  it('should return a static json response with status 201', async () => {
    const res = await request(app)
      .get('/ice-flakes')
    expect(res.body).toEqual({
      resource: 'ice-flakes',
      count: 1005,
      shape: 'rectangle'
    })
  })
})
