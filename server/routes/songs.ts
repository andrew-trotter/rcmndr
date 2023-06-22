import express from 'express'

import { validateAccessToken } from '../auth0'
import { songDraftSchema } from '../../types/Song'
import * as usersDb from '../db/users'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const id = req.auth?.payload.sub
    if (id === undefined) {
      res.status(500).json({ error: 'Could not authenticate!' })
      return
    }

    const input = req.body
    const songData = songDraftSchema.parse(input)

    usersDb.insertSong(songData, id)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: 'oops something went wrong' })
    }
  }
})

export default router
