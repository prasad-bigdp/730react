import React from 'react'
import Card from './components/Card'
export default function App ()
{
  const divStyle = { border: '2px solid red', height: '400px', width: '400px',padding:'40px' };
  const name = "raj", age = 25;
  return (
    <div style={divStyle}>
      <Card name={name} myage={age} />
    </div>
  )
}
