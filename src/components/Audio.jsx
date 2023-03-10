import IconPlay from '../assets/images/icon-play.svg'

const AudioWord = ({ phonetics }) => {
  const { audio } = phonetics[0]

  const handlePlayAudio = (e) => {
    // eslint-disable-next-line no-undef
    const audioStream = new Audio(audio)
    audioStream.play()
  }

  return <img src={IconPlay} className='word-audio' alt='Play audio' onClick={handlePlayAudio} />
}

export default AudioWord
