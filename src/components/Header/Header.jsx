import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      <div className="user_image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
