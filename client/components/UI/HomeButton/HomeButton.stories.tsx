import type { Meta, StoryObj } from '@storybook/react'

import HomeButton from './HomeButton'
import Background from '../Background/Background'

const meta: Meta<typeof HomeButton> = {
  title: 'ErrorPage Button',
  component: HomeButton,
}

type Story = StoryObj<typeof HomeButton>

export const MyPrimary: Story = {
  name: 'Home Button',
  render: () => (
    <Background>
      <HomeButton></HomeButton>,
    </Background>
  ),
}

export default meta
