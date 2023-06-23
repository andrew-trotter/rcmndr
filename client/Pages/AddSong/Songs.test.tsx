// @vitest-environment jsdom
import { vi, test, expect, afterEach } from 'vitest'
import { screen } from '@testing-library/react'
import * as auth0 from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Songs from './Songs'
import { insertSong } from '../../apis/songs'
import { renderComponent } from '../../test-utils'

vi.mock('../../apis/songs')
vi.mock('@auth0/auth0-react')

test('When the form is submitted, the api function should be called with the form object', async () => {
  const insertedSong = {
    title: 'My Song',
    artist: 'My Artist',
    genre: 'My Genre',
    link: 'https://example.com',
    comments: 'This song is amazing',
  }

  ;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn(),
  })

  nock('http://localhost').post('/api/v1/songs', insertedSong).reply(201)

  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="/" element={<Songs />} />)
  )
  const queryClient = new QueryClient()

  const { user } = renderComponent(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )

  await user.type(
    await screen.findByLabelText('Song title *'),
    insertedSong.title
  )
  await user.type(await screen.findByLabelText('Artist *'), insertedSong.artist)
  await user.type(await screen.findByLabelText('Genre *'), insertedSong.genre)
  await user.type(await screen.findByLabelText('Link'), insertedSong.link)
  await user.type(
    await screen.findByLabelText('Comment'),
    insertedSong.comments
  )

  await user.click(screen.getByRole('button', { name: 'Save' }))
})
