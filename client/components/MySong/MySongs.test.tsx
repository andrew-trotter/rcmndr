//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import MySongs from './MySongs'

import { Song } from '../../../types/Song'
import { renderComponent } from '../../test-utils'

expect.extend(matchers)

test('renders MySongs component', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
      comments: 'Comment',
    },
  ]

  render(
    <MySongs
      songs={songs}
      handleEditSong={() => {}}
      handleDeleteSong={() => {}}
    />
  )

  const result = screen.getByText('These are the songs you have recommended')
  expect(result.textContent).toBe('These are the songs you have recommended')
  const songTitle = screen.getByText('Song Title')
  expect(songTitle.textContent).toBe('Song Title')
})

test('songs are passed as props are rendered', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
      comments: 'Comment',
    },
  ]

  render(
    <MySongs
      songs={songs}
      handleEditSong={() => {}}
      handleDeleteSong={() => {}}
    />
  )

  const songTitle = screen.getByText('Song Title')
  expect(songTitle.textContent).toBe('Song Title')
  const songArtist = screen.getByText('Song Artist')
  expect(songArtist.textContent).toBe('Song Artist')
})

test('handleEditSong is called', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
      comments: 'Comment',
    },
  ]

  const fakeHandleEditSong = vi.fn()
  const { user } = renderComponent(
    <MySongs
      songs={songs}
      handleEditSong={fakeHandleEditSong}
      handleDeleteSong={() => {}}
    />
  )
  const editButton = screen.getAllByRole('button')[0]
  await user.click(editButton)
  expect(fakeHandleEditSong).toBeCalled()
})

test('handleDeleteSong is called', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
      comments: 'Comment',
    },
  ]

  const fakeHandleDeleteSong = vi.fn()

  const { user } = renderComponent(
    <MySongs
      songs={songs}
      handleEditSong={() => {}}
      handleDeleteSong={fakeHandleDeleteSong}
    />
  )
  const deleteButton = screen.getAllByRole('button')[1]

  await user.click(deleteButton)

  expect(fakeHandleDeleteSong).toBeCalled()
})
