import React, { useEffect, useState } from "react";

import backgroundBanner from "./assets/banner.jpg"
import api from "../../services/api";

import "./styles.css";

function Banner() {
  const [user, setUser] = useState([]);
  const githubUser = "Everton-Afonso";

  useEffect(() => {
    api
      .get(`users/${githubUser}`)
      .then((response) => setUser(response.data))
      .catch((error) => {
        alert(`Ops! ocorreu um erro: ${error}`);
      });
  }, []);

  return (
    <section className="banner-conteiner">
      <div className="banner">
        <img className="banner-background" src={backgroundBanner} alt="Banner" />
      </div>

      <img className="banner-picture" src={user.avatar_url} alt="teste" />
      <h1 className="name">{user.name}</h1>
      <p className="bio">{user.bio}</p>
    </section>
  );
}

export default Banner;
