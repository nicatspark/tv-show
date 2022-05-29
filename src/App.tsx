import './index.css'
import { Container } from './components/search.styles'
import { Route, Routes } from 'react-router-dom'
import { ShowPage } from './pages/ShowPage'
import { SearchPage } from './pages/SearchPage'
import { Errorboundary } from './Errorboundary'
import { Header } from './components/Header'
import { RecoilRoot } from 'recoil'
import { FavoritsPage } from './pages/FavoritsPage'

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <Container>
          <Header />
          <Errorboundary>
            <Routes>
              <Route path='/' element={<SearchPage />} />
              <Route path='show/:id' element={<ShowPage />} />
              <Route path='favorits' element={<FavoritsPage />} />
            </Routes>
          </Errorboundary>
        </Container>
      </div>
    </RecoilRoot>
  )
}

export default App
