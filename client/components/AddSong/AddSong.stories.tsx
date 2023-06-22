import type { Meta, StoryObj } from '@storybook/react'

import AddSong from './AddSong'
import Background from '../UI/Background/Background'

const meta: Meta<typeof AddSong> = {
  title: 'Component/AddSong',
  component: AddSong,
}

type Story = StoryObj<typeof AddSong>

export const MyAddSongForm: Story = {
  name: 'AddSong Form',
  render: () => (
    <Background>
      <AddSong></AddSong>,
    </Background>
  ),
}

export default meta
