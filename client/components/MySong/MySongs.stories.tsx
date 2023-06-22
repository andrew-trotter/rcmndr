import type { Meta, StoryObj } from '@storybook/react'
import MySongs from './MySongs'
import Background from '../UI/Background/Background'
import { Song } from '../../../types/Song'

const meta: Meta<typeof MySongs> = {
  title: 'mySong',
  component: MySongs,
}

type Story = StoryObj<typeof MySongs>

const songs: Song[] = [
  {
    id: '1',
    title: 'Song Title',
    artist: 'Song Artist',
    genre: 'Song Genre',
    link: 'https://www.youtube.com/watch?v=1',
  },
  {
    id: '1',
    title: 'Song Title',
    artist: 'Song Artist',
    genre: 'Song Genre',
    link: 'https://www.youtube.com/watch?v=1',
  },
  {
    id: '1',
    title: 'Song Title',
    artist: 'Song Artist',
    genre: 'Song Genre',
    link: 'https://www.youtube.com/watch?v=1',
  },
  {
    id: '1',
    title: 'Song Title',
    artist: 'Song Artist',
    genre: 'Song Genre',
    link: 'https://www.youtube.com/watch?v=1',
  },
  {
    id: '1',
    title: 'Song Title',
    artist: 'Song Artist',
    genre: 'Song Genre',
    link: 'https://www.youtube.com/watch?v=1',
  },
]

export const mySong: Story = {
  name: 'MySong',
  render: () => (
    <Background>
      <MySongs
        songs={songs}
        handleEditSong={() => {}}
        handleDeleteSong={() => {}}
      />
    </Background>
  ),
}

export default meta
