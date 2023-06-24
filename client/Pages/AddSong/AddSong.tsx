import AddSong from '../../components/AddSong/AddSong'
import { insertSong } from '../../apis/songs'
import { SongDraft } from '../../../types/Song'

import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'

function Songs() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: SongDraft; token: string }) =>
      insertSong(form, token),
    onSuccess: () => {
      navigate('/my-songs')
    },
  })

  async function handleSubmit(form: SongDraft) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  return <AddSong handleSubmit={handleSubmit} />
}

export default Songs
