import Books from "./Components/Books"
import './App.css'
function App ()
{
	const bestSellers = 
		[
			{
				bookImageURL: "https://example.com/images/harry_potter.jpg",
				bookName: "Harry Potter and the Philosopher's Stone",
				bookAuthor: "J.K. Rowling",
			},
			{
				bookImageURL: "https://example.com/images/to_kill_mockingbird.jpg",
				bookName: "To Kill a Mockingbird",
				bookAuthor: "Harper Lee",
			},
			{
				bookImageURL: "https://example.com/images/1984.jpg",
				bookName: "1984",
				bookAuthor: "George Orwell",
			},
			{
				bookImageURL: "https://example.com/images/great_gatsby.jpg",
				bookName: "The Great Gatsby",
				bookAuthor: "F. Scott Fitzgerald",
			},
			{
				bookImageURL: "https://example.com/images/lord_of_rings.jpg",
				bookName: "The Lord of the Rings",
				bookAuthor: "J.R.R. Tolkien",
			},
	]
  return (
		<>
			<h1>Book Library</h1>
			<h2 className='title'>Best Sellers</h2>
			<Books booksArray={bestSellers} />
			{/* <h2 className='title'>Fiction</h2>
			<Books />
			<h2 className='title'>Non Fiction</h2>
			<Books /> */}
		</>
	)
}
export default App