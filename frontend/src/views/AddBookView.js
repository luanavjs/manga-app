import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'

const AddBookView = () => {

    const apiUrl = process.env.REACT_APP_API_URL

    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        numberOfPages: "",
        image: ""
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        book.genre = book.genre.split(",")
        const response = await axios.post(`${apiUrl}/books/book`, book)
        navigate('/')
    }

    return (
        <div className="container mt-5">
            <form className="form">
                <h2>Agregar manga</h2>
                
                <input
                    onChange={handleChange} 
                    value={book.title}
                    name="title"
                    className="form-control" 
                    placeholder="Titulo" 
                    type="text"
                />

                <input
                    onChange={handleChange} 
                    value={book.author}
                    name="author"
                    className="form-control" 
                    placeholder="Mangaka" 
                    type="text"
                />

                <input
                    onChange={handleChange} 
                    value={book.genre}
                    name="genre"
                    className="form-control" 
                    placeholder="Genero (separar por comas)" 
                    type="text"
                />

                <input
                    onChange={handleChange} 
                    value={book.image}
                    name="image"
                    className="form-control" 
                    placeholder="Url de imagen" 
                    type="text"
                />

                <input
                    onChange={handleChange} 
                    value={book.numberOfPages}
                    name="numberOfPages"
                    className="form-control" 
                    placeholder="Volumenes" 
                    type="text"
                />

                <button onClick={handleSubmit} className="btn btn-outline-dark form-control">Crear</button>
            </form>
            
        </div>
    );
};

export default AddBookView;