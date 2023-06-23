import { Meta, StoryObj } from '@storybook/react'
import ErrorPage from './ErrorPage'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta = {
  title: 'Components/ErrorPage',
  component: ErrorPage,
}
type Story = StoryObj<typeof ErrorPage>

export const MyErrorPage: Story = {
  name: 'ErrorPage',
  render: () => (
    <MemoryRouter initialEntries={['/some-invalid-path']}>
      <ErrorPage />
    </MemoryRouter>
  ),
}

export default meta
