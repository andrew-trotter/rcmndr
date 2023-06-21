import type { Meta, StoryObj } from '@storybook/react'

import ErrorPageButton from './ErrorPageButton'
import Background from '../Background/Background'

const meta: Meta<typeof ErrorPageButton> = {
  title: 'ErrorPage Button',
  component: ErrorPageButton,
}

type Story = StoryObj<typeof ErrorPageButton>

export const MyPrimary: Story = {
  name: 'Button to home',
  render: () => (
    <Background>
      <ErrorPageButton></ErrorPageButton>,
    </Background>
  ),
}

export default meta
