import { Song } from '../../../types/Song'
import SongListItem from '../SongListItem/SongListItem'

interface Props {
  songs: Song[]
  handleDeleteSong: (songId: string) => void
  handleEditSong: (songId: string) => void
}

function MySongs(props: Props) {
  const { songs, handleDeleteSong, handleEditSong } = props

  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-white mb-2">Brenegade</h1>
      <p className="text-white font-medium ">
        These are the songs you have recommended
      </p>

      {songs.map((song) => {
        return (
          <SongListItem
            key={song.id}
            song={song}
            handleEditSong={handleEditSong}
            handleDeleteSong={handleDeleteSong}
          />
        )
      })}
    </div>
  )
}

export default MySongs
