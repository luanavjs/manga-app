import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

const login = (userObj) => {
    const response = axios.post(`${apiUrl}/auth/login`, userObj)
    return response
}

export default login;