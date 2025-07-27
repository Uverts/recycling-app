import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ClassifierPage from './pages/ClassifierPage'
import GuidePage from './pages/GuidePage'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ClassifierPage />} />
          <Route path="/guide" element={<GuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
