import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BookDetailsView() {
    const apiUrl = process.env.REACT_APP_API_URL
    const [book, setBook] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getBook()
      }, [])
    
    const getBook = async () => {
        const response =  await axios.get(`${apiUrl}/books/book/${id}`)
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
        </div>
    )
}
