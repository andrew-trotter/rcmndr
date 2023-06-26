import express from 'express'
import { validateAccessToken } from '../auth0'
import * as db from '../db/songs'
import { logError } from '../logger'
import { songDraftSchema } from '../../types/Song'
import * as usersDb from '../db/users'


const router = express.Router()

// GET /api/v1/songs
router.get('/', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub

  
  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }
  try {
    const songs = await db.getSongs(id)
    res.status(200).json(songs)
  } catch (e) {
    if (e instanceof Error) {
      logError(e.message)
      res.status(500).json({ message: 'Unable to retrieve songs' })
    }
  }
})

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
