import json
import os
import requests
from datetime import datetime

import speech_recognition as sr

from src.whisper import recognize_whisper_api


def main():
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    recognizer = sr.Recognizer()
    while True:
        try:
            if(input('Press any key to start recording: ') == 's'):
                with sr.Microphone() as source:
                    print('Say something!')
                    audio = recognizer.listen(source)
                print(f'whisper api start at: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
                text = recognize_whisper_api(audio_data=audio, api_key=OPENAI_API_KEY)
                print(f'whisper api start at: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
                print(text)
                requests.post(
                    url='http://127.0.0.1:3000/speak'
                    , data=json.dumps({'text': text})
                    , headers={'Content-Type': 'application/json'}
                )
        except sr.RequestError as e:
            print('Could not request results from Whisper API')
        except Exception as e:
            print(e)


if __name__ == '__main__':
    main()
