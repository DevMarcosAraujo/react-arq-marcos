import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//pages//
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import About from './pages/About'

// utils//
import ScrollToTop from './utils/ScrollTop'

function App() {
   return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </Router>
  )
}

export default App
