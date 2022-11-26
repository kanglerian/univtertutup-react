import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Level from './pages/Level'
import Program from './pages/Program'
import Registrar from './pages/Registrar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registrar />} />
      <Route path="/program" element={<Program />} />
      <Route path="/level" element={<Level />} />
    </Routes>
  )
}

export default App