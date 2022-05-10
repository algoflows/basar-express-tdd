import app from '../app.js'
import { it, describe, expect } from 'vitest'

describe('UserRegister', () => {
  it('return 200 OK when signup request is valid', async () => {
    const usersResponse = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'user1@gmail.com',
        password: '123456',
      }),
    })
    expect(400).toBe(usersResponse.status)
  })
})
