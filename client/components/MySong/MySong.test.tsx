//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import MySongs from '../../components/MySong/MySongs'

import { Song } from '../../../types/Song'
import { renderComponent } from '../../test-utils'

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

test('songs are passed as props are rendered', async () => {
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

  const result1 = screen.getByText('Song Title')
  expect(result1.textContent).toBe('Song Title')
  const result2 = screen.getByText('Song Artist')
  expect(result2.textContent).toBe('Song Artist')
})

test('handleEditSong is called', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
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
