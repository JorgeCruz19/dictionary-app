import useFetch from './hooks/useFetch'
import Header from './components/Header'
import Search from './components/Search'
import Loader from './components/Loader'
import Meaning from './components/Meaning'
import Error404 from './components/Error404'

import './App.css'

const App = () => {
  const { isLoading, isError, data, search } = useFetch()

  const handleSearch = (query) => {
    search(query)
  }

  return (
    <>
      <Header />
      <Search search={handleSearch} />
      {isLoading && <Loader />}
      {isError && <Error404 />}
      <main>{data && <Meaning data={data} />}</main>
    </>
  )
}

export default App
