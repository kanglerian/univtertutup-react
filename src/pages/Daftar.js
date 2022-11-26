import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Daftar = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    axios.post(`http://localhost:3001/level`,{
      name: name
    })
    e.preventDefault();
  }
  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label><br/>
          <input type='text' name={name} onChange={handleChange} placeholder='isi nama lengkap'/>
        </div>
        <button type='submit'>Simpan</button>
      </form>
    </>
  )
}

export default Daftar