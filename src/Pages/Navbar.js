import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Bootstrap's built-in collapse method
      const collapseInstance = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapseInstance.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">JobLink</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/SignUpPage" onClick={handleNavLinkClick}>Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginPage" onClick={handleNavLinkClick}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactPage" onClick={handleNavLinkClick}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>HomePage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={handleNavLinkClick}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
