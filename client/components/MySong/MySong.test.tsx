//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import MySongs from '../../components/MySong/MySongs'

import { Song } from '../../../types/Song'

expect.extend(matchers)
vi.mock('./apis/songs')
vi.mock('@auth0/auth0-react')

test('renders MySongs component', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
    },
  ]

  render(
    <MySongs
      songs={songs}
      handleEditSong={() => {}}
      handleDeleteSong={() => {}}
    />
  )

  const result = screen.getByText('These are the tracks you have recommended')
  expect(result.textContent).toBe('These are the tracks you have recommended')
})
