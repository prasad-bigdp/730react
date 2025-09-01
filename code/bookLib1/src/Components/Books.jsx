import Book from "./Book"
function Books ({booksArray})
{
	console.log(booksArray)
    return (
			<div className='books'>
			{
				
				booksArray.map((ele, ind) => (
					<Book
						imageUrl={ele.bookImageURL}
						name={ele.bookName}
						author={ele.bookAuthor}
					/>
				)
				)
				}
			</div>
		)
}
export default Books