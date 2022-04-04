import React from "react";
import "./style.css";
import logo from "../../assets/logo.jpg";
import user from "../../assets/user.png";

export default function Header({ black }) {
  return (
    <header className={black ? "header--black" : ""}>
      <div className="header--logo">
        <img src={logo} alt="logo da netflix" />
      </div>
      <div className="header--user">
        <img src={user} alt="avatar do usuário" />
      </div>
    </header>
  );
}
