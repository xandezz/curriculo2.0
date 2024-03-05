import { BrowserRouter, Routes, Route } from 'react-router-dom'
//CSS
import './App.css'
// Paginas
import Home from './Pages/Home'
import Sobremim from './Pages/Sobremim'
import Projects from './Pages/Projects'
//Components
import Navbar from './components/Navbar'
import Mobilenavbar from './components/Mobilenavbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faEnvelope)


function App() {

  return (
    <BrowserRouter>
      <Mobilenavbar status={"mobile-ativo"}/>
      <Navbar status={"mobile-desativado"}/>
      <Routes>
        <Route path="/curriculo2.0" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sobremim" element={<Sobremim />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
