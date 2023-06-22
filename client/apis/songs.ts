import request from 'superagent'

import { Song, SongDraft } from '../../types/Song'

const baseUrl = '/api/v1/songs'

export async function getSongs(token: string) {
  const response = await request
    .get(baseUrl)
    .set('Authorization', `Bearer ${token}`)
  return response.body as Song[]
}

export async function addSong(form: SongDraft | Song, token: string) {
  await request
    .post(baseUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
  
}
