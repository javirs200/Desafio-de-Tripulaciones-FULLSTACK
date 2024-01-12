import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";




const Register1 = () => {
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event. target.password.value;

  //   // configuramos la info que se envía, en formato objeto para bbdd sql?
  //   const postData = {
  //     email:email,
  //     password:password
  //   }
  //   const response = await axios.post("RUTA", postData);

  //   navigate("/login")

  // }

  const handleFakeSubmit = (event) =>{
    event.preventDefault();
    navigate("/login")
  }

  return <section className="form_logo_container">

    <Logo/>
   
    
    
    <article className="form_section">

      <p className="create_p">Crea una cuenta</p>
      <form className="form_label" onClick={handleFakeSubmit}>
        <input className="input_form" type="email" placeholder="Email" name="email"></input>
        <input className="input_form" type="password" placeholder="Contraseña" name="password"></input>
        <input className="input_form"   type="password" placeholder="Confirmar contraseña"></input>
        <button className="form_button" type="click">Registrarse</button>
        {/* <button type="click" onClick={handleSubmit}>Registrase</button> */}
      </form>


    </article>


  </section>;
};

export default Register1;
