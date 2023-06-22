//@vitest-environment jsdom
import { expect, test, vi, afterEach } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import * as auth0 from '@auth0/auth0-react'

import MySongsPage from '../../Pages/MySongs/MySongsPage'
import { Song } from '../../../types/Song'

const queryClient = new QueryClient()

expect.extend(matchers)
vi.mock('./apis/songs')
vi.mock('@auth0/auth0-react')

afterEach(cleanup)

test('MySongsPage component shows title', async () => {

  (auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn()
  })

  render(
    <QueryClientProvider client={queryClient}>
      <MySongsPage />
    </QueryClientProvider>
)

  const title = await screen.getByText(`I'm the My Songs Page`)
  expect(title.textContent).toBe(`I'm the My Songs Page`)
})

test.only('MySongsPage fetches a song array', async () => {

  (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn()
  })

  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
    },
    {
      id: '2',
      title: 'Song Title2',
      artist: 'Song Artist2',
      genre: 'Song Genre2',
      link: 'https://www.youtube.com/watch?v=2',
    },
  ]

  // intercept http requests to respond with our mock data
  nock('http://localhost').get('/api/v1/songs').reply(200, songs)

  render(
      <QueryClientProvider client={queryClient}>
        <MySongsPage />
      </QueryClientProvider>
  )
    
    const headings = await screen.findAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(2)
    expect(headings[0].textContent).toMatch('Song Title')
    expect(headings[1].textContent).toMatch('Song Title2')

})
