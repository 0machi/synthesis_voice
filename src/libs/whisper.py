from io import BytesIO

import openai
from speech_recognition.audio import AudioData
from speech_recognition.exceptions import SetupError


def recognize_whisper_api(
    audio_data: "AudioData",
    api_key: str,
    model: str = "whisper-1"
):
    wav_data = BytesIO(audio_data.get_wav_data())
    wav_data.name = "SpeechRecognition_audio.wav"

    transcript = openai.Audio.transcribe(model, wav_data, api_key=api_key, language="ja")
    return transcript["text"]
