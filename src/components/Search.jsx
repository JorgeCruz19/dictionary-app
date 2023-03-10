import { useState } from 'react'
import IconSearch from '../assets/images/icon-search.svg'

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()
    if (searchValue === '') {
      setError(true)
      return
    }
    setError(false)
    search(searchValue.toLowerCase())
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          style={{ border: '1px solid transparent', borderColor: error ? 'crimson' : 'transparent' }}
          className='search-input'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search word...'
        />

        <img src={IconSearch} className='search-icon' alt='Search' onClick={handleSearch} />
      </form>
      {error && <small className='error'>Please fill the input search</small>}
    </div>
  )
}

export default Search
