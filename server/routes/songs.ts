import express from 'express'
import { validateAccessToken } from '../auth0'



const router = express.Router()

// GET /api/v1/songs
router.get('/', validateAccessToken )

// POST /api/v1/songs

export default router
