import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Level from './pages/Level'
import Program from './pages/Program'
import Registrar from './pages/Registrar'
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrasi" element={<Registration />} />
      <Route path="/program" element={<Program />} />
      <Route path="/level" element={<Level />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  )
}

export default App