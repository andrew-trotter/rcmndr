import type { Meta, StoryObj } from '@storybook/react'

import HomeButton from './HomeButton'
import Background from '../Background/Background'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof HomeButton> = {
  title: 'Home Button',
  component: HomeButton,
}

type Story = StoryObj<typeof HomeButton>

export const MyHomeButton: Story = {
  name: 'Home',
  render: () => (
    <MemoryRouter initialEntries={['/some-invalid-path']}>
      <Background>
        <HomeButton />
      </Background>
    </MemoryRouter>
  ),
}

export default meta
