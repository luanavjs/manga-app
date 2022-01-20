import './Login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../services/authService';

const LoginView = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await login(user)
        console.log(response.data)
        setUser({
            email: '',
            password: '',
        })
        navigate('/')
    }

    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit} className="form">
            <h2>Iniciar sesión</h2>
            <input
                onChange={handleChange}
                value={user.email}
                className="form-control" 
                name="email"
                type="text" 
                placeholder="Email"
            />
            <input 
                onChange={handleChange}
                value={user.password}
                className="form-control" 
                name="password"
                type="password" 
                placeholder="Contraseña"
            />
            <button className="btn btn-outline-dark form-control">Iniciar sesión</button>
        </form>
        </div>
    );
};

export default LoginView;