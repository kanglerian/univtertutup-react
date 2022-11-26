import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Daftar from './pages/Daftar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daftar" element={<Daftar />} />
    </Routes>
  )
}

export default App