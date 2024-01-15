import React from "react";
import { useNavigate } from "react-router-dom";

const FormHome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/table");

  };
  return (
    <section className="form_logo_container">
      <h3 className="create_p">Empieza una nueva propuesta</h3>

      <article className="form_section">
        <form className="form_label">
          <input
            className="input_form"
            type="text"
            placeholder="Nombre/Razón"
            name="name"
          ></input>
          <input
            className="input_form"
            type="text"
            placeholder="Dirección"
            name="address"
          ></input>
          <input
            className="input_form"
            type="text"
            placeholder="Empresa Eléctrica"
            name="company"
          ></input>
          <input
            className="input_form"
            type="text"
            placeholder="CUPS"
            name="cups"
          ></input>
          <p>Inserta un archivo</p>

          <button
          id="button_login"
          className="form_button"
          type="button"
          onClick={handleButtonClick}
        >
          Continuar
        </button>
        </form>
      </article>
    </section>
  );
};

export default FormHome;
