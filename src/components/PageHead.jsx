import React from "react";

const Header = ({ title, children }) => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header__container">
        <div className="header__content">
          <h2>{title}</h2>
          <h6>{children}</h6>
        </div>
      </div>
    </header>
  );
};

export default Header;
