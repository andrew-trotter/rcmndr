import db from './connection'
import { Song } from '../../types/Song'

//GET songs by userId
export async function getSongs(userId: string) {
  return (await db('songs')    
    .select(
      'songs.id as songId',
      'songs.title',
      'songs.artist',
      'songs.genre',
      'songs.link',
      'songs.comments'
    )
    .where('user_id', userId)) as Song[]
}