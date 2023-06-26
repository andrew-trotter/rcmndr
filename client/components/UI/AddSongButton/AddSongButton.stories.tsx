import type { Meta, StoryObj } from '@storybook/react'

import AddSongButton from './AddSongButton'
import Background from '../Background/Background'

const meta: Meta<typeof AddSongButton> = {
  title: 'Add Song Button',
  component: AddSongButton,
}

type Story = StoryObj<typeof AddSongButton>

export const MyPrimary: Story = {
  name: 'Add Song Button',
  render: () => (
    <Background>
      <AddSongButton>+</AddSongButton>,
    </Background>
  ),
}

export default meta
