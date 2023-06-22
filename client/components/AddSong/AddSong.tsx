import { Song, SongDraft } from '../../../types/Song'
import Button from '../UI/Button/Button'
import TextBox from '../UI/TextBox/TextBox'

function AddSong() {
  return (
    <div>
      <form /*onSubmit={handleSubmit}*/ className="space-y-4 p-4">
        <div className="space-y-2">
          <label htmlFor="title">Title *</label>
          <TextBox
            type="text"
            name="title"
            id="title"
            required
            /*defaultValue={props.profile?.nickname}*/
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="artist">Artist *</label>
          <TextBox
            type="text"
            name="artist"
            id="artist"
            required
            /* defaultValue={props.profile?.firstName}*/
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="genre">Genre *</label>
          <TextBox
            type="text"
            name="genre"
            id="genre"
            required
            /*defaultValue={props.profile?.lastName}*/
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="link">Link</label>
          <TextBox
            type="text"
            name="link"
            id="link"
            /*defaultValue={props.profile?.lastName}*/
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="comment">Comment</label>
          <TextBox
            type="text"
            name="comment"
            id="comment"
            /*defaultValue={props.profile?.lastName}*/
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
