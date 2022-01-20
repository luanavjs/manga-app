import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { isAuthenticated } from "../services/authService"
import { getBookById } from "../services/bookService"

export default function BookDetailsView() {
    const user = isAuthenticated()
    const [book, setBook] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getBook()
      }, [])
    
    const getBook = async () => {
        const response =  await getBookById(id)
        setBook(response.data)
    }


    return (
        <div className="container mt-5">
            <h2>{book.title}</h2>
            <h3>Autor: {book.author}</h3>
            <h3>Volumenes: {book.numberOfPages}</h3>
            <img style={{height:400}} src={book.image} alt="foto portada del manga"/>
            <p>
                {book.genre?.map((g, i) => (
                <>
                    <span key={i}>{g}</span>
                    <br />
                </>
                ))}
            </p>
            { user.role === "ADMIN" && (
                <Button variant="dark" href={`/editBook/${book._id}`}>Edit</Button>
            )}
        </div>
    )
}
