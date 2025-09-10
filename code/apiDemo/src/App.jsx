import './App.css'
import { useEffect, useState } from 'react'
function App ()
{
  const [cartoons,setCartoons] = useState([])
  function getData ()
  {
    fetch(`https://api.sampleapis.com/beers/ale`)
			.then((res) => res.json())
			.then((data) => setCartoons(data))
			.catch((err) => console.log(err))
  }
  useEffect(() =>
  {
    /* it is the default hook that is called before rendering the component */
    getData();
  },[])
  return (
    <div>
      <div className='beers'>
        {cartoons.map((e, i) => (
          <div key={e.id} className='beer'>
            <img src={e.image} alt={e.name} />
            <h2>{e.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App
