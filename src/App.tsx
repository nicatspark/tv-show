import { useState } from 'react'
import './index.css'
import Search from './components/search'
import { SearchResult } from './components/SearchResult'
import { Container } from './components/search.styles'
import { Route, Routes } from 'react-router-dom'
import { ShowPage } from './pages/ShowPage'
import { SearchPage } from './pages/SearchPage'
import { Errorboundary } from './Errorboundary'

function App() {
  return (
    <div className='App'>
      <Container>
        <header>
          <h1>TV-Search</h1>
        </header>
        <Errorboundary>
          <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='show/:id' element={<ShowPage />} />
          </Routes>
        </Errorboundary>
      </Container>
    </div>
  )
}

export default App
