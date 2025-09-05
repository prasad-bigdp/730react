
function Products ({pro})
{
    return (
        <div>
            {
                pro.map((e, i) => (
                    <div key={e.id}>
                        <img src={e.image} alt={e.title} />
                        <h2>{e.title}</h2>
                        <p>Price:₹{e.price}</p>
                        <button>Add to cart</button>
                    </div>
               ))
            }
        </div>
    )
}
export default Products