import express from 'express'

const app = express()

app.post('/api/users', (req, res) => {
  res.status(200).send('Hello World')
})

export { app }