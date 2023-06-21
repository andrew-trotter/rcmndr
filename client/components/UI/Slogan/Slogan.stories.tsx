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
      <Slogan>
        <p className="text-4xl">collate.</p>
        <p className="text-4xl">recommend.</p>
        <p className="text-4xl">discover.</p>
      </Slogan>
      ,
    </Background>
  ),
}

export default meta
