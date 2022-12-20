import React from "react";
import "../../style/header.css";
import logo from "../../assets/img/dumble.png";
function Header() {
  const nav_link = [
    { path: "#", display: "none" },
    { path: "#", display: "Schedule" },
    { path: "#", display: "Schedule" },
    { path: "#", display: "Pricing" },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>Fit Body</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_link.map((item) => (
                <li className="nav-item">
                  <a href={item.path}></a>
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-right">
            <button className="register-btn">Register</button>
            <span className="mobile menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
