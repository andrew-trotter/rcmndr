import express from 'express'
import { songDraftSchema } from '../../types/Song'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.post('/api/v1/songs', async (req, res) => {
  try {
    const input = req.body
    const songData = songDraftSchema.parse(input)
    res.json(songData)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'oops something went wrong' })
    }
  }
})

export default router
