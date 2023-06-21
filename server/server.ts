import express from 'express'
import { join } from 'path'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use(express.static(join(__dirname, '..', 'dist')))

server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

if (process.env.NODE_ENV === 'production') {
  server.get('*', (_, res) => {
    res.sendFile(join(__dirname, '../dist', 'index.html'))
  })
}

export default server
