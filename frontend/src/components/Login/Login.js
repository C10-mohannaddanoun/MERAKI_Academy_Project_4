import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Button, Input, message, Space } from "antd";
import { tokenContext, isLoggedInContext } from "../../App";

const Login = () => {
  const { setToken } = useContext(tokenContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedInContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message2, setMessage2] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  

  const chEmail = (e) => {
    setEmail(e.target.value);
  };
  const chPassword = (e) => {
    setPassword(e.target.value);
  };

  const sendReq = () => {
    messageApi.open({
      type: "loading",
      content: "Loading...",
      duration: 0.5,
    });
    axios
      .post("http://localhost:5000/user/Login", { email, password })
      .then((result) => {
        console.log(result);
        const token = result.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        setMessage2(result.data.message);
        setTimeout(() => {
          messageApi.open({
            type: "success",
            content: result.data.message,
            duration: 3,
          });
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          messageApi.open({
            type: "error",
            content: err.response.data.message,
            duration: 3,
          });
        }, 500);
      });
  };

  return (
    <div
      className="Login"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      {contextHolder}
      <Input
        style={{ maxWidth: 200, marginBottom: 10 }}
        placeholder="Email"
        onChange={chEmail}
      />
      <Input
        style={{ maxWidth: 200, marginBottom: 10 }}
        type="password"
        placeholder="Password"
        onChange={chPassword}
      />
      <Button
        style={{ maxWidth: 250, marginBottom: 10 }}
        type="primary"
        onClick={sendReq}
       
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
