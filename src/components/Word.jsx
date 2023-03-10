const Word = ({ word, phonetic }) => {
  return (
    <>
      <h1 className='word'>{word}</h1>
      <span className='word-phonetic'>{phonetic}</span>
    </>
  )
}

export default Word
