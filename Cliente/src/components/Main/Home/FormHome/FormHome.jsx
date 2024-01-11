import React from "react";

const FormHome = () => {
  return (
<>
<h1>Empieza una nueva propuesta</h1>
<br/>
<form className="form_home">
        <input
          type="text"
          className="input_name"
          placeholder="Nombre/Razón"
        ></input>
        <input
          type="text"
          className="input_password"
          placeholder="Dirección"
        ></input>
        <input
          type="text"
          className="input_password"
          placeholder="Cups"
        ></input>
      </form>
      <button type="submit">Continuar</button>
</>


  );
};

export default FormHome;
