import React from "react";
import Nav from "../Nav/Nav";
import foto_user from "../../../assets/img_offer/user.svg";
import estado_pendiente from "../../../assets/img_offer/EstadoPendiente.svg";
import estado_aceptada from "../../../assets/img_offer/EstadoAceptada.svg";
import estado_rechazada from "../../../assets/img_offer/EstadoRechazada.svg"
// import lupa
import download from "../../../assets/img_offer/download.svg";
import trash from "../../../assets/img_offer/trash.svg";
import "./Offer_View.css";

const Offer_View = () => {
  return (
    <div>
      <Nav />
      <section>
        <article className="search_bar"></article>
        <article className="filter-offers">
          <p>Todas las propuestas</p>
          <p>Mis propuestas</p>
        </article>
      </section>
      <section>
        <article className="filters_options">
          <input type="checkbox" />
          {/* <input type="text" src={lupa}> */}
          <p>Todas</p>
          <p>Aceptadas</p>
          <p>Rechazadas</p>
          <p>Pendientes</p>
        </article>
        <img src={download} alt="download" />
        <img src={trash} alt="trash" />
      </section>
      <section>
        <article>
          <img src={foto_user} alt="perfil_user" />
          <p>Jorge Fernandez-19/01/24</p>
          <img src={foto_user} alt="perfil_user" />
          <p>Paloma Ocanha</p>
          <img src={estado_pendiente} alt="estado" />
        </article>
        <article>
          <img src={foto_user} alt="perfil_user" />
          <p>María Rodríguez-19/01/24</p>
          <img src={foto_user} alt="perfil_user" />
          <p>Andrea Deskovic</p>
          <img src={estado_rechazada} alt="estado" />
        </article>
        <article>
          <img src={foto_user} alt="perfil_user" />
          <p>Francisco Vivas-19/01/24</p>
          <img src={foto_user} alt="perfil_user" />
          <p>Andrea Deskovic</p>
          <img src={estado_rechazada} alt="estado" />
        </article>
        <article>
          <img src={foto_user} alt="perfil_user" />
          <p>Lucía Fontana- 18/01/24</p>
          <img src={foto_user} alt="perfil_user" />
          <p>Paloma Ocanha</p>
          <img src={estado_aceptada} alt="estado" />
        </article>
      </section>
    </div>
  );
};

export default Offer_View;
