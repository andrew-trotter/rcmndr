//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'

import ErrorPage from './ErrorPage'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('If button is on the page', async () => {
  render(<ErrorPage />)

  const button = screen.getByRole('button', {
    name: 'Home',
  })

  expect(button).toBeInTheDocument()

  await user.click(button)
})

// test('If button redirects to root route', async () => {
//   render(<ErrorPage />)

//   const button = screen.getByRole('button', { name: 'Home' })
//   await user.click(button)

//   const component = screen.getByText('-1')
//   expect(component).toBeInTheDocument()
// })
