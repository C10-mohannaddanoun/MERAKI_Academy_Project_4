import { Link } from "react-router-dom";
import { tokenContext, isLoggedInContext } from "../../App";
import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

const Nav = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedInContext);
  const { setToken } = useContext(tokenContext);
  const NavStyle = {
    textDecoration: "none",
    margin: "0 10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "1px solid #333",
    fontSize: "17px",
    color: "white",
  };

  const Logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <div
      className="Nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px ",
        color: "",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Link to="/Home" className="NavLink" style={NavStyle}>
        <AiOutlineHome />
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/user/favList" style={{ ...NavStyle, marginLeft: "auto" }}>
            <MdFavorite />
          </Link>

          <Link
            onClick={Logout}
            to="/user/Login"
            className="NavLink"
            style={{ ...NavStyle, marginLeft: "10px" }}
          >
            <CiLogout />
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/user/register"
            className="NavLink"
            style={{ ...NavStyle, marginLeft: "auto", fontSize: "15" }}
          >
            Register
          </Link>
          <Link to="/user/Login" className="NavLink" style={NavStyle}>
            <CiLogin />
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
