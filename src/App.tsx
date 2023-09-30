import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/App.css'
import { HomePage } from './Pages/HomePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
