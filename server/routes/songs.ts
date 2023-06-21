import express from 'express'

const router = express.Router()

// GET /api/v1/songs

// POST /api/v1/songs

router.post('/api/v1/songs', async (req, res) => {
  try {
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'oops something went wrong' })
    }
  }
})

export default router
