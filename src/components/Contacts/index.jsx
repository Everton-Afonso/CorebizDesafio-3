import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

import "./styles.css";

function Navigation() {
  const whatsapp = 5535998511667,
    phone = 5535998511667,
    email = "everton@gmail.com";

  return (
    <section className="container-contacts">
      <div className="contacts">
        <a
          className="contacts-link"
          href={`https://wa.me/send?phone=${whatsapp}&text=Texto%20Olá em que posso te ajudar`}
        >
          <FaWhatsapp className="contacts-icons" />
          <span>Whatsapp</span>
        </a>

        <a className="contacts-link" href={`tel:${phone}`}>
          <FaPhoneAlt className="contacts-icons" />
          <span>Telefone</span>
        </a>

        <a className="contacts-link" href={`mailto:${email}`}>
          <FaRegEnvelope className="contacts-icons" />
          <span>E-mail</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;
