import { useState } from "react"
function App ()
{
	const [count, setCount] = useState(0)
	const [isEvenOdd,setEvenOdd]=useState("Even")
	function incr ()
	{
		if(count<20)
		{
			setCount(count + 1); checkEvenOdd();
		}
		else
		{
			alert("count should not be more than 20")
		}
	}
	const decr = () =>
	{
		if (count > 0)
		{
			setCount(count - 1); checkEvenOdd();
		}
		else
		{
			alert("count should not be less than 0")
		}
	}
	function checkEvenOdd ()
	{
		if ((count+1) % 2 == 0) { setEvenOdd("Even") }
		else { setEvenOdd("Odd")}
	}
	return (
		<div className=' flex flex-col p-5 rounded-2xl shadow shadow-blue-400 bg-white gap-10'>
			<p className=' text-4xl'>{count}</p>
			<p className=' text-2xl'>{isEvenOdd}</p>
			<div className='buttons flex gap-5'>
				<button
					onClick={incr}
					className=' py-2 px-5 bg-black text-xl text-white rounded '>
					+
				</button>
				<button
					onClick={decr}
					className=' py-2 px-5 bg-black text-xl text-white rounded '>
					-
				</button>
				<button
					onClick={() => setCount(0)}
					className=' py-2 px-5 bg-black text-xl text-white rounded '>
					reset
				</button>
			</div>
		</div>
	)
}
export default App