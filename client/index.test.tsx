//@vitest-environment jsdom
import { afterEach, expect, it, test } from 'vitest'
import { Suspense, lazy,  } from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import matchers from '@testing-library/jest-dom/matchers'
import { debug, log } from 'console'
const LazyComponent = lazy(() => import("./Pages/MyFriends/MyFriends"))

function Main() {
  return(
    <div>
      <div>lazy loaded</div>
      <LazyComponent />
    </div>
  )
}

afterEach(cleanup)

test('renders lazy', async () => {
    render(
    <Suspense fallback='loading'>
        <Main />
    </Suspense>
  )
  await waitFor(() => {
  const result = screen.getByText('My existing friends');
  
  debug()
    expect(result.textContent).toBe('My existing friends');
  });
});