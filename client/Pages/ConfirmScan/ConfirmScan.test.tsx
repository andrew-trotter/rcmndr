// @vitest-environment jsdom
import {} from '@testing-library/react'
import { test, expect } from 'vitest'
import ConfirmScan from './ConfirmScan'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { renderComponent } from '../../test-utils'

test('renders the code from useParams', () => {
  const { getByText } = renderComponent(
    <MemoryRouter initialEntries={['/auth0|1234454']}>
      <Routes>
        <Route path="/:code" element={<ConfirmScan />} />
      </Routes>
    </MemoryRouter>
  )

  const codeElement = getByText('auth0|1234454')
  expect(codeElement).toBeInTheDocument()
})
