function Book ({imageUrl,name,author})
{
    return (
			<div className='book'>
				<img
					src={imageUrl}
					alt={name}
				/>
			<h2>{name}</h2>
			<p>Author : {author}</p>
			</div>
		)
}
export default Book
