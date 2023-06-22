import express from 'express'

import { validateAccessToken } from '../auth0'
import { song, songDraftSchema } from '../../types/Song'
import * as usersDb from '../db/users'
import { logError } from '../logger'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.post('/', validateAccessToken, async (req, res) => {
  const input = req.body

  if (!input) {
    res.status(400).json({ message: 'Please provide a song' })
    return
  }

  try {

    const songDraftResult = songDraftSchema.safeParse(input)

    if (!songDraftResult.success) {
      res.status(400).json({ message: 'Invalid song' })
      return
    }

    if (songDraftResult.success && req.auth?.payload.sub) {
      const auth0Id = req.auth?.payload.sub
      await usersDb.insertSong(songDraftResult.data, auth0Id)
      res.sendStatus(201)
      return
    }
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new song to database' })
  }
})


export default router
