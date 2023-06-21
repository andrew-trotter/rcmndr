import express from 'express'
import { validateAccessToken } from '../auth0'
import * as db from '../db/users'
import { logError } from '../logger'

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
    logError(e)
    res.status(500).json({ message: 'Unable to retrieve songs' })
  }
})

// POST /api/v1/songs

export default router
