import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Favorites, NotFound } from '../pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/favorites' element={<Favorites />} />
        <Route exact path='/notfound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App