import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

const Home = () => {
  const [lists, setLists] = useState([]);
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
      <div>
        {showList}
      </div>
    </>
  )
}

export default Home