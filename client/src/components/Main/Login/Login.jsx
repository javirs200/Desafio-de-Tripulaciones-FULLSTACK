import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { UserContext } from "../../../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext();

  const handleButtonClick = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      // Simulo el login. ruta: /api/login
      // Añadir a parte una comprobación para el password (se hace en bbdd).
      setLoggedIn(true);
      navigate("/home");
    } else {
      alert(
        "Por favor, ingrese un correo electrónico y una contraseña válidos."
      );
    } 
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // const isValidPassword = (password) => {
  //   return password.length >= 6;
  // };

  return (
    <section className="form_logo_container">
      <Logo />
      <article className="form_section">
        <p className="create_p">Inicia sesión</p>
        <form className="form_label">
          <input
            type="email"
            className="input_form"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input_form"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <br />
        <p id="register_link">
          ¿No tienes cuenta? <a>Registrate</a>
        </p>
        <button
          id="button_login"
          className="form_button"
          type="button"
          onClick={handleButtonClick}
        >
          Continuar
        </button>
      </article>
    </section>
  );
};

export default Login;
