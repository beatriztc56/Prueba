import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './pages/Movies'
import Series from './pages/Series'

function App() {

  return (
  <>
  <Router>
   <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  </ Router>
  </>
  )
}

export default App
