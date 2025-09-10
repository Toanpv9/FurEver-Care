import React from "react";
import "./Header.css";

function Header({ title, background }) {
  return (
    <div
      className="site-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container text-center">
        <h1 className="header-title">{title}</h1>
      </div>
    </div>
  );
}

export default Header;
