import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/home");
  };
  return (

    <div>
      <img src="/PropiedadLogotipo-negro.png" alt="logo" className="logo" />
      <h3 className="title_login">Iniciar sesión</h3>
      <form>
        <input
          type="text"
          className="input_name"
          placeholder="Nombre de Usuario"
        ></input>
        <input
          type="text"
          className="input_password"
          placeholder="Contraseña"
        ></input>
      </form>
      <p>
        ¿No tienes cuenta? <a>Registrate</a>
      </p>
      <button onClick={handleButtonClick} type="submit">
        Continuar
      </button>
    </div>
  );
};

export default Login;
