import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar-bg">
      <a className="navbar-brand" href="#">
        <img src="/logo.jpeg" alt="Logo" className="logo d-inline-block align-top" />
        Tu acuario Online!
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Acerca de</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
