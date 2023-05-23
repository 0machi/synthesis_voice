import { PassThrough } from 'stream'
import Speaker from 'speaker'

export const playAudio = (audio: Buffer, sampleRate: number): void => {
  const speaker = new Speaker({
    channels: 1,
    bitDepth: 16,
    sampleRate
  })
  const bufferStream = new PassThrough()
  bufferStream.end(audio)
  bufferStream.pipe(speaker)
}
