import React, { useState } from "react";

import { data } from "../../services/data";

import "./styles.css";

function Favorites() {
  const [favorite, setFavorite] = useState(0);
  const { content } = data;

  return (
    <section className="favorites-container">
      <div className="favorites-buttons">
        {content.map((info, index) => (
          <button
            key={index}
            className={`favorite-button ${index === favorite? "active": "inactive"}`}
            onClick={() => setFavorite(index)}
          >
            {info.title}
          </button>
        ))}
      </div>

      <div className="favorites">
        {content[favorite].posts.map((posts, index) => (
          <a
            key={index}
            style={{ backgroundImage: `url(${posts.background})` }}
            href={posts.link}
            className="favorite"
            target={"_blank"}
            rel="noreferrer"
          >
            <p className="title">{posts.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Favorites;
