//@vitest-environment jsdom
import { expect, test } from 'vitest'
import { Suspense, lazy,  } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import Loading from './components/Loading/Loading'

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