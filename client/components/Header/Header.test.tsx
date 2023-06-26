// @vitest-environment jsdom
import { describe, it, vi, expect } from 'vitest'
import Header from './Header'
import { renderComponent } from '../../test-utils'

describe('Header', () => {
  it('should show the loading spinner while a fetch is taking place', () => {
    vi.mock('react-query', () => ({
      useIsFetching: vi.fn().mockReturnValue(true),
    }))

    const { getByAltText } = renderComponent(<Header />)
    const loadingSpinner = getByAltText('loading spinner')

    expect(loadingSpinner).toBeTruthy()
  })
})
