import { Link } from "react-router-dom";
import { tokenContext, isLoggedInContext } from "../../App";
import React, { useContext } from "react";
import {  HeartTwoTone,HeartFilled  } from '@ant-design/icons'

const Nav = () => {
  const { isLoggedIn,setIsLoggedIn } = useContext(isLoggedInContext);
  const {setToken}=useContext(tokenContext)

  const Logout =()=>{

    localStorage.clear()
    setIsLoggedIn(false)
    setToken(null)
    
}


  return (
    <div
      className="Nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      {isLoggedIn ? (
        <>
          <Link
            to="/category/AllCategoryes"
            className="NavLink"
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: "0 10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#555",
              border: "1px solid #333",
              transition: "background-color 0.3s ease",
            }}
          >
            Home
          </Link>
          <Link>
          <HeartFilled />
          </Link>
          <Link
          onClick={Logout}
            to="/user/Login"
            className="NavLink"
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: "0 10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#555",
              border: "1px solid #333",
              transition: "background-color 0.3s ease",
            }}
          >
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/user/register"
            className="NavLink"
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: "0 10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#555",
              border: "1px solid #333",
              transition: "background-color 0.3s ease",
            }}
          >
            Register
          </Link>
          <Link
            to="/user/Login"
            className="NavLink"
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: "0 10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#555",
              border: "1px solid #333",
              transition: "background-color 0.3s ease",
            }}
          >
            Login
          </Link>
          <Link
            to="/category/AllCategoryes"
            className="NavLink"
            style={{
              textDecoration: "none",
              color: "inherit",
              margin: "0 10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#555",
              border: "1px solid #333",
              transition: "background-color 0.3s ease",
            }}
          >
            Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
