
const RegisterView = () => {
    return (
        <div className="container mt-5">
          <form className="form">
          <h2>Registro</h2>
            <input
                className="form-control" 
                type="text" 
                placeholder="Nombre"
            />
            <input 
                className="form-control" 
                type="text" 
                placeholder="Email"
            />
            <input 
                className="form-control" 
                type="text" 
                placeholder="Contraseña"
            />
            <button className="btn btn-outline-dark form-control">Registrarse</button>
          </form>  
        </div>
    );
};

export default RegisterView;