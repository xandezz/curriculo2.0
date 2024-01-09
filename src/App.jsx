
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//CSS
import './App.css'
// Paginas
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
                                                                       

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>                      
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
