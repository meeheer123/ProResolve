import './App.css'
import HomePage from '../components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
