import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/songs'
import { getMockToken } from './mockToken'

vi.mock('../db/songs')
vi.mock('../logger.ts')

describe('GET /api/v1/songs', () => {
  it('should return 200 with an array', async () => {
    const fakeSongs = [
      {
        id: '1',
        user_id: 2,
        genre: 'songGenre',
        title: 'songsTitle',
        artist: 'songArtist',
        link: 'songLink',
      },
    ]

    vi.mocked(db.getSongs).mockResolvedValue(fakeSongs)
    const response = await request(server)
      .get('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeSongs)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getSongs).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Unable to retrieve songs' })
  })
})
