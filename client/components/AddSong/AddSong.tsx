import { Song, SongDraft } from '../../../types/Song'
import Button from '../UI/Button/Button'
import TextBox from '../UI/TextBox/TextBox'

interface Props {
  handleSubmit : (form : SongDraft) => void
}

function AddSong(props : Props) {
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const artist = formData.get('artist') as string
    const genre = formData.get('genre') as string | null
    const link = formData.get('genre') as string | null
    const comment =  formData.get('comment') as string
    
    const form = {
      title : title,
      artist : artist,
      genre : genre,
      link : link,
      comment : comment
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 text-white">
        <div className="space-y-2">
          <label htmlFor="title">Song title *</label>
          <TextBox
            type="text"
            name="title"
            id="title"
            required
            placeholder="The full title of the song"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="artist">Artist *</label>
          <TextBox
            type="text"
            name="artist"
            id="artist"
            required
            placeholder="Name of the artist / singer / group"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="genre">Genre *</label>
          <TextBox
            type="text"
            name="genre"
            id="genre"
            required
            placeholder="Genre of music"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="link">Link</label>
          <TextBox
            type="text"
            name="link"
            id="link"
            placeholder="A link so others can listen (optional)"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="comment">Comment</label>
          <TextBox
            type="text"
            name="comment"
            id="comment"
            placeholder="What do you like about this song?"
          />
        </div>
        <div className="mx-auto text-center">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default AddSong
