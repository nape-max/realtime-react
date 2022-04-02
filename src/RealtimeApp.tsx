import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Home from './components/pages/Home'
import Messenger from './components/pages/Messenger'

// CSS
import './RealtimeApp.css'

function RealtimeApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messenger' element={<Messenger />} />
      </Routes>
    </Router>
  )
}

export default RealtimeApp
