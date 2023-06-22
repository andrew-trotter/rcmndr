//@vitest-environment jsdom
import { expect, test, vi, afterEach } from 'vitest'
import { Suspense, lazy } from 'react'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import Loading from './components/Loading/Loading'

const LazyComponent = lazy(() => import('./components/TestLazyComponent'))

expect.extend(matchers)
vi.mock('./apis/songs')
vi.mock('@auth0/auth0-react')

afterEach(cleanup)

function Main() {
  return (
    <div>
      <div>lazy loaded</div>
      <LazyComponent />
    </div>
  )
}

test('renders lazy', async () => {
  render(
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  )
  await waitFor(() => {
    const result = screen.getByText('Test')
    expect(result.textContent).toBe('Test')
  })
})
