import express from 'express'
import { songDraftSchema } from '../../types/Song'
import * as usersDb from '../db/users'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.post('/', async (req, res) => {
  try {
    const input = req.body
    const songData = songDraftSchema.parse(input)
    console.log(songData)
    usersDb.insertSong(songData)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'oops something went wrong' })
    }
  }
})

export default router
