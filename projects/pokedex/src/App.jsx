import React, { useState } from 'react'
import './App.css'
function App ()
{
  const [pname, setPname] = useState('')
  const [imgLink,setImgLink]= useState('')
  const search = async () =>
  {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`)
    const data = await res.json();
    console.log(data);
    setImgLink(data.sprites.front_default)
  }
  return (
    <div>
      <img src={imgLink} alt="" />
      <input type="text" placeholder='Enter a Pokemon Name' onChange={(e)=>setPname(e.target.value)}/>
      <button onClick={search}>Search</button>
    </div>
  )
}

export default App
