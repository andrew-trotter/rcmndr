import express from 'express'
import { join, resolve } from 'path'

import userRouter from './routes/users'
import songRouter from './routes/songs'
import notifications from './routes/notifications'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/api/v1/users', userRouter)
server.use('/api/v1/songs', songRouter)
server.use('/api/v1/notifications', notifications)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(resolve(__dirname, '../dist/assets')))
  server.get('*', (_, res) => {
    res.sendFile(join('public', 'index.html'))
  })
}

export default server
