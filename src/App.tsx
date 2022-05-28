import './index.css'
import { Container } from './components/search.styles'
import { Route, Routes } from 'react-router-dom'
import { ShowPage } from './pages/ShowPage'
import { SearchPage } from './pages/SearchPage'
import { Errorboundary } from './Errorboundary'
import { Header } from './components/Header'

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
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
