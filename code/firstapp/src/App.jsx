import './App.css'
import Header from './Header';
import Card from './Card';
function App ()
{
	let na = "prasad";
	let price = 10, quantity = 5;
	return (
		<>
			<Header />
			<div className='myDiv'>
				<img
					src='welcome.avif'
					alt='image'
				/>
				<h1>Welcome to React, My name is {na}</h1>
				<p>
					The price of each apple is {price}.Total i bought {quantity} apples.
					so, total price is {price * quantity}
				</p>
			</div>
			<div className='cards'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	)
}
export default App;