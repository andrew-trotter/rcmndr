import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getFriends, getSongs, searchFriends } from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getFriends', () => {
  it('should return friends', async () => {
    const friends = await getFriends('auth0|6478f3fd75374ee3d7bc4d94')
    expect(friends).toHaveLength(2)
    expect(friends[0]).toHaveProperty('id')
    expect(friends[0]).toHaveProperty('nickname')
    expect(friends[0]).toHaveProperty('firstName')
  })
})

describe('searchFriends', () => {
  it('added friends should not be suggested', async () => {
    const friends = await searchFriends('auth0|6478f3fd75374ee3d7bc4d94', 'rem')
    expect(friends).toHaveLength(0)
  })

  it('non added friends should be suggested', async () => {
    const friends = await searchFriends('auth0|6478f3fd75374ee3d7bc4d94', 'boi')
    expect(friends).toHaveLength(1)
  })
})

describe('getSongs', () => {
  it('it should return songs', async () => {
    const songs = await getSongs('auth0|649024f773375442becf3102')
    expect(songs).toHaveLength(2)
    expect(songs[0]).toHaveProperty('id')
    expect(songs[0]).toHaveProperty('title')
    expect(songs[0]).toHaveProperty('artist')
    expect(songs[0]).toHaveProperty('genre')
    expect(songs[0]).toHaveProperty('link')
    expect(songs[0]).toHaveProperty('comments')
  })
})
