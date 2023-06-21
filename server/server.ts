import express from 'express'
import { join } from 'path'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

server.get('*', (_, res) => {
  res.sendFile(join(__dirname, '../index.html'))
})

export default server
