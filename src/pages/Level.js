import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const Level = () => {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    axios.post(`http://localhost:3001/level`,{
      name: name
    })
    .then(() => {
      getAxios();
      setName("")
    })
    e.preventDefault();
  }
  const getAxios = () => {
    axios.get(`http://localhost:3001/level`)
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
    axios.delete(`http://localhost:3001/level`,{
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
        <p>Nama:{val.name}</p>
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
          <input type='text' name={name} onChange={handleChange} placeholder='isi nama lengkap'/>
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

export default Level