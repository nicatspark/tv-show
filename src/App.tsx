import { useState } from 'react'
import './index.css'
import Search from './components/search'
import { SearchResult } from './components/SearchResult'
import { Tvshow } from './api/api-type-definitions'
import { Container } from './components/search.styles'

function App() {
  const [apiResult, setApiResult] = useState<Tvshow[]>([])

  const updateResult = (data: Tvshow[]) => {
    setApiResult(data)
  }

  return (
    <div className='App'>
      <Container>
        <header>
          <h1>TV-Search</h1>
        </header>
        <Search updateResults={updateResult} />
        <SearchResult apiResult={apiResult} />
      </Container>
    </div>
  )
}

export default App
