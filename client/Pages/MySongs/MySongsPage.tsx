import { useQuery } from 'react-query'
import MySongs from '../../components/MySong/MySongs'
import { getSongs } from '../../apis/songs'
import { useAuth0 } from '@auth0/auth0-react'

function MySongsPage() {
  const { getAccessTokenSilently } = useAuth0()
  const { isLoading, data } = useQuery('getSongs', async () => {
    const token = await getAccessTokenSilently()
    return await getSongs(token)
  })

  function handleEditSong() {}

  function handleDeleteSong() {}

  return (
    <div>
      {!isLoading && data && (
        <MySongs
          songs={data}
          handleEditSong={handleEditSong}
          handleDeleteSong={() => {
            handleDeleteSong
          }}
        />
      )}
    </div>
  )
}

export default MySongsPage
