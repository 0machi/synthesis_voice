import express from 'express'
import { errorHandler } from './handlers/errorHandler.js'
import { logErrors } from './handlers/logErrors.js'
import { getAudioQuery, synthesisVoice } from './libs/coeiroink.js'
import { getDate } from './libs/getDate.js'
import { playAudio } from './libs/speaker.js'

import type { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())
app.use(logErrors)
app.use(errorHandler)

app.post('/speak', (req: Request, res: Response, next: NextFunction) => {
  (async () => {
    const text = req.body.text as string
    const audioQuery = await getAudioQuery(text)
    if (audioQuery === undefined) throw new Error('audio_query')

    const voice = await synthesisVoice(audioQuery)
    if (voice === undefined) throw new Error('synthesis')

    console.log(getDate())
    console.log(text)

    playAudio(Buffer.from(voice), audioQuery.outputSamplingRate)
    res.status(200).send('OK')
  })().catch(next)
})

app.listen(3000, () => {
  console.log('Server is running.')
})
