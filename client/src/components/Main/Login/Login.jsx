import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const Login = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/home");
  };
  return <section className="form_logo_container">

      <Logo/>  
      <article className="form_section"> 
      <p className="create_p">Inicia sesión</p>
      <form className="form_label">
        <input
          type="email"
          className="input_form"
          placeholder="Email"
        ></input>
        <input
          type="password"
          className="input_form"
          placeholder="Contraseña"
        ></input>
      </form>
      <p>
        ¿No tienes cuenta? <a>Registrate</a>
      </p>
      <button id="button_login" className="form_button"  type="click" onClick={handleButtonClick} >Continuar</button>
      </article>
    </section>
  
};

export default Login;

