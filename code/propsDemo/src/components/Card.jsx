import React from 'react'

const Card = ({name,myage}) => {
  return (
    <div style={{ border: '2px solid red', height: '200px', width: '200px' }}>
          <h2>{name}</h2>
          <p>{myage}</p>
    </div>
  )
}
export default Card