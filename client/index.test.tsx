//@vitest-environment jsdom
import { expect, test } from 'vitest'
import { Suspense, lazy,  } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import Loading from './components/Loading/Loading'
import MySongs from './components/MySong/MySongs'
import { Song } from '../types/Song'

const LazyComponent = lazy(() => import("./components/TestLazyComponent"))

function Main() {
  return(
    <div>
      <div>lazy loaded</div>
      <LazyComponent />
    </div>
  )
}

test('renders lazy', async () => {
    render(
    <Suspense fallback={<Loading/>}>
        <Main />
    </Suspense>
  )
  await waitFor(() => {
  const result = screen.getByText('Test');
    expect(result.textContent).toBe('Test');
  });
});

test('renders MySongs component',async () => {

  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
    }
  ]

  render(<MySongs songs={songs}
    handleEditSong={() => {}}
    handleDeleteSong={() => {}}/>)

  const result = screen.getByText('These are the tracks you have recommended')
  expect(result.textContent).toBe('These are the tracks you have recommended')
})