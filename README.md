# マイクに入力した音声を Whisper API で認識し、COEIROINK で認識した音声を再生するアプリ

## 動作確認

- [COEIROINK](https://coeiroink.com/download) を起動
- $ export OPENAI_API_KEY=
- $ synthesis_voice
- $ npx tsc
- $ node dist/index.js
- $ python -m src.index
