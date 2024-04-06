import { Link } from "react-router-dom";

import React from "react";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/user/register">Register</Link> ||
      <Link to="/user/Login">Login</Link>
    </div>
  );
};

export default Nav;
