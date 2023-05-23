import axios from 'axios'
import type { AudioQuery } from '../types'

const coeiroinkHost = 'http://127.0.0.1:50031'
const speaker = 0

export const getAudioQuery = async (text: string): Promise<AudioQuery | undefined> => {
  const audioQuery = axios.post(
    `${coeiroinkHost}/audio_query?text=${encodeURIComponent(text)}&speaker=${speaker}`
    , {
      headers: {
        Accept: 'application/json'
      }
    }
  ).then((res) => {
    return res.data as AudioQuery
  }).catch((err) => {
    console.error(err)
    return undefined
  })

  return await audioQuery
}

export const synthesisVoice = async (audioQuery: AudioQuery): Promise<string | undefined> => {
  const voice = await axios.post(
    `${coeiroinkHost}/synthesis?speaker=${speaker}`, audioQuery
    , {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        accept: 'audio/wav'
      }
    }
  ).then((res) => {
    return res.data as string
  }).catch((err) => {
    console.error(err)
    return undefined
  })

  return voice
}
