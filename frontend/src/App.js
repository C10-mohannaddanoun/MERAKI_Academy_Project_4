import React, { useState, createContext } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import { Button, Space, Input } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Products from "./components/products/Products";
import OneProduct from "./components/OneProduct/OneProduct";
export const tokenContext = createContext();
export const isLoggedInContext = createContext();

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    <>
      <tokenContext.Provider value={{ token, setToken }}>
        <isLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <div className="App">
            <Nav />

            <Routes>
              <Route path="/category/AllCategoryes" element={<Home />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/user/Login" element={<Login />} />
              <Route path="/productsByCategory/:id" element={<Products />} />
              <Route path="/productById/:id" element={<OneProduct/>}/>
            </Routes>
          </div>
        </isLoggedInContext.Provider>
      </tokenContext.Provider>
    </>
  );
};

export default App;
