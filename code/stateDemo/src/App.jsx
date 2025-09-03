import React from 'react'
import './App.css'
import { useState } from 'react'
function App ()
{
 const [count,setCount]=useState(0)
  return (
		<>
			<h2>{count}</h2>
			<div>
				<button onClick={() => setCount(count + 1)}>+</button>
				<button onClick={() => setCount(count - 1)}>-</button>
				<button onClick={() => setCount(0)}>reset</button>
			</div>
		</>
	)
}

export default App
