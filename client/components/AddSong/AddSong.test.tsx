//@vitest-environment jsdom
import { vi, test, expect, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddSong from './AddSong'
import { SongDraft } from '../../../types/Song'

vi.mock('../../apis/songs')

const user = userEvent.setup()
afterEach(cleanup)

test('When the form is submitted the handleSubmit function should be called with the form object', async () => {
  let submittedFormData = null

  const handleSubmit = (form: SongDraft) => {
    submittedFormData = form
  }

  render(<AddSong handleSubmit={handleSubmit} />)

  await user.type(screen.getByLabelText('Song title *'), 'My Song')
  await user.type(screen.getByLabelText('Artist *'), 'My Artist')
  await user.type(screen.getByLabelText('Genre *'), 'My Genre')
  await user.type(screen.getByLabelText('Link'), 'https://example.com')
  await user.type(screen.getByLabelText('Comment'), 'This song is amazing')

  await user.click(screen.getByText('Save'))

  expect(submittedFormData).toEqual({
    title: 'My Song',
    artist: 'My Artist',
    genre: 'My Genre',
    link: 'https://example.com',
    comments: 'This song is amazing',
  })
})
