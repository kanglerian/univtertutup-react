import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import useForm from '../utilities/useForm';

const Registrar = () => {
  const [lists, setLists] = useState([]);
  const [form, setForm] = useForm({
    fullName: ''
  });
  const handleSubmit = (e) => {
    axios.post(`http://localhost:3001/level`,{
      fullName: form.fullName
    })
    .then(() => {
      getAxios();
    })
    e.preventDefault();
  }
  const getAxios = () => {
    axios.get(`http://localhost:3001/registrar`)
    .then((result) => {
      setLists(result.data);
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getAxios();
  },[]);
  const handleDelete = (e) => {
    axios.delete(`http://localhost:3001/registrar`,{
      data: {
        id: e
      }
    })
    .then((result) => {
      getAxios();
    },[]);
  }
  const showList = lists.map((val,i) => {
    return(
      <div style={{ backgroundColor: '#DADADA', padding: 10, marginRight: 10, display: 'inline-block' }}>
        <p>Nama:{val.fullName} - {val.nik}</p>
        <button onClick={() => handleDelete(val.id)}>Hapus</button>
      </div>
    )
  })
  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label><br/>
          <input type='text' name={form.fullName} onChange={(val) => setForm('name', val)} placeholder='isi nama lengkap'/>
        </div>
        <button type='submit'>Simpan</button>
      </form>
      <br/>
      <div>
        {showList}
      </div>
    </>
  )
}

export default Registrar