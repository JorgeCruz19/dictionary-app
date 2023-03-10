import Word from './Word'
import AudioWord from './Audio'
import IconNewWindow from '../assets/images/icon-new-window.svg'

const Meaning = ({ data }) => {
  const { word, phonetic, phonetics, meanings, sourceUrls } = data[0] || []
  return (
    <>
      <section className='word-container'>
        <Word word={word} phonetic={phonetic} />
        {phonetics && phonetics[0]?.audio && <AudioWord phonetics={phonetics} />}
      </section>
      <section className='meaning-container'>
        {meanings?.map((meaning, index) =>
          meaning?.partOfSpeech == 'noun' ? (
            <div key={index}>
              <h2 className='meaning-title'>noun</h2>
              <h3 className='meaning-subtitle'>Meaning</h3>
              <ul className='meaning-list'>
                {meaning?.definitions?.map(({ definition }, index) => (
                  <li key={index}> {definition} </li>
                ))}
              </ul>
              <div className='meaning-synonyms'>
                {meaning?.synonyms.length > 1 && (
                  <>
                    <h3 className='meaning-subtitle'>Synonyms</h3>
                    <span>
                      {meaning?.synonyms.length > 1
                        ? meaning?.synonyms.map((synonym, index) =>
                            meaning?.synonyms.length - 1 == index
                              ? synonym.padEnd(synonym.length + 2, '. ')
                              : synonym.padEnd(synonym.length + 2, ', ')
                          )
                        : meaning?.synonyms}
                    </span>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div key={index}>
              <h2 className='meaning-title'>verb</h2>
              <h3 className='meaning-subtitle'>Meaning</h3>
              <ul className='meaning-list'>
                {meaning?.definitions?.map(({ definition, example }, index) => (
                  <div key={index}>
                    <li>{definition}</li>
                    <p className='meaning-paragraph'>{example}</p>
                  </div>
                ))}
              </ul>
            </div>
          )
        )}
        {sourceUrls?.length > 0 && (
          <>
            <hr />
            <h3 className='meaning-subtitle'>Source</h3>
            <a href={sourceUrls[0]} target='_blank' rel='noreferrer' className='meaning-source'>
              {sourceUrls[0]}
              <img src={IconNewWindow} alt='Icon new window' />
            </a>
          </>
        )}
      </section>
    </>
  )
}

export default Meaning
