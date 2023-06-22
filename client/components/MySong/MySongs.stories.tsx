import type { Meta, StoryObj } from '@storybook/react'
import MySongs from './MySongs'
import Background from '../UI/Background/Background'


const meta: Meta<typeof MySongs> = {
  title: 'mySong',
  component: MySongs,
}

type Story = StoryObj<typeof MySongs>



export const mySong: Story = {
  name: 'MySong',
  render: () => (
    <Background>
      <MySongs/>
    </Background>
  ),
}

export default meta
