import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getSongs } from './songs'


beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getSongs', () => {
  it('it should return songs', async () => {
    const songs = await getSongs('auth0|649024f773375442becf3102')    
    expect(songs).toHaveLength(2)
    expect(songs[0]).toHaveProperty('songId')
    expect(songs[0]).toHaveProperty('title')
    expect(songs[0]).toHaveProperty('artist')
    expect(songs[0]).toHaveProperty('genre')
    expect(songs[0]).toHaveProperty('link')
    expect(songs[0]).toHaveProperty('comments')
  })
})
