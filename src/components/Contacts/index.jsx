import React from "react";

import "./styles.css";

function Navigation() {
  const whatsapp = 5535998511667,
    linkedin = "https://www.linkedin.com/in/everton-otavio-b5b035191/",
    github = "https://github.com/Everton-Afonso";

  return (
    <section className="container-contacts">
      <div className="contacts">
        <a
          className="contacts-link"
          href={`https://wa.me/send?phone=${whatsapp}&text=Texto%20Olá em que posso te ajudar`}
        >
          <img
            src="icons/whatsapp.png"
            alt="Whatsaap"
            className="contacts-icons"
          />
          <span>Whatsapp</span>
        </a>

        <a className="contacts-link" href={linkedin}>
          <img
            src="icons/linkedin.png"
            alt="Linkedin"
            className="contacts-icons"
          />
          <span>Linkedin</span>
        </a>

        <a className="contacts-link" href={github}>
          <img src="icons/github.png" alt="GitHub" className="contacts-icons" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;
