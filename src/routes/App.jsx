import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Favorites, NotFound } from '../pages'
import Layout from '../components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/favorites' element={<Favorites />} />
          <Route exact path='/notfound' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
