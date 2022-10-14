import React from "react";
import Logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} className="navbar-logo"/>
      <div className="bold">My Travel Journal</div>
    </nav>
  );
}
