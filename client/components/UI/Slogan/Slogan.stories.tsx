import type { Meta, StoryObj } from '@storybook/react'
import Background from '../Background/Background'
import Slogan from './Slogan'

const meta: Meta<typeof Slogan> = {
  title: 'Slogan animation',
  component: Slogan,
}

type Story = StoryObj<typeof Slogan>

export const MyPrimary: Story = {
  name: 'Slogan',
  render: () => (
    <Background>
      <Slogan />
    </Background>
  ),
}

export default meta
