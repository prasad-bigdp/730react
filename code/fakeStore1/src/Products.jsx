import React from 'react'

function Products(props) {
  return (
		<div className='products max-w-5xl my-5 m-auto grid grid-cols-3 gap-5'>
			{props.products.map((e, i) => (
				<div className='product p-5 rounded-2xl shadow shadow-amber-300 flex flex-col items-center justify-between gap-3'>
                    <img src={e.image} className=' h-40 w-40'/>
                    <h2 className=' text-xl text-center font-bold'>{e.title}</h2>
                    <p className=' text-xl'>Price:₹{e.price}</p>
                    {props.children}
                    <button onClick={props.add} className='py-3 px-3 bg-black text-white rounded-2xl hover:bg-amber-300'>Add to Cart</button>
				</div>
			))}
		</div>
	)
}

export default Products
