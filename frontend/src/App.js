import React, { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import { Button, Space, Input } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Products from "./components/products/Products";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/category/AllCategoryes"element={<Home/>}/>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/Login" element={<Login setToken={setToken} />} />
        <Route path="/productsByCategory/:id" element={<Products/>}/>

      </Routes>
    </div>
  );
};

export default App;
