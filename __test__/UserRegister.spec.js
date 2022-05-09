import request from 'supertest'
import { app } from '../app'

it('return 200 OK when signup request is valid', (done) => {
  request(app)
    .post('/api/users')
    .send({
      username: 'user1',
      email: 'user1@gmail.com',
      password: '123456',
    })
    .expect(200, done)
})
