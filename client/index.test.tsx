//@vitest-environment jsdom
import { expect, test } from 'vitest'
import { Suspense, lazy,  } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { debug } from 'console'
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
    <Suspense fallback='loading'>
        <Main />
    </Suspense>
  )
  await waitFor(() => {
  const result = screen.getByText('Test');
  debug()
    expect(result.textContent).toBe('Test');
  });
});