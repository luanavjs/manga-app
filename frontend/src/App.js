import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const apiUrl = process.env.REACT_APP_API_URL
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  async function getBooks() {
    const response = await axios.get(`${apiUrl}/books`)
    setBooks(response.data)
  }

  return (
    <div className="container mt-5">
     <h1>Manga App</h1>
     {books.map(book =>(
       <h3 key={book._id}>{book.title}</h3>
     ))}
    </div>
  );
}

export default App;
