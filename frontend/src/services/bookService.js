import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

const createBook = (bookObj) => {
    const response = axios.post(`${apiUrl}/books/book`, bookObj)
    return response
}

export default createBook;