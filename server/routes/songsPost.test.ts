// created this file incase other group creates songs.test.ts which will cause conflicts
// copy content below to songs.test.ts once merges are complete

import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/users'
import { getMockToken } from './mockToken'
import { SongDraft } from '../../types/Song'

vi.mock('../db/users')
vi.mock('../logger.ts')

describe('POST /api/v1/songs', () => {
  it('should return 201 when adding a new song', async () => {
    const fakeSong: SongDraft = {
      title: 'banana',
      artist: 'banana man',
      genre: 'banana phobia',
      link: 'banana.com',
    }

    vi.mocked(db.insertSong).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeSong)
    expect(response.status).toBe(201)
  })

  it('should return 400 if the body does not match the zod schemea', async () => {
    const fakeSong = {}

    vi.mocked(db.insertSong).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeSong)
    expect(response.status).toBe(400)
  })

  it('should return 500 when no access token is passed', async () => {
    const fakeSong: SongDraft = {
      title: 'banana',
      artist: 'banana man',
      genre: 'banana phobia',
      link: 'banana.com',
    }

    vi.mocked(db.insertSong).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeSong)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to insert new song to database',
    })
  })


})
