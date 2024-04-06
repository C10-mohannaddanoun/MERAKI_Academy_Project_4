import { useState } from "react";
import axios from "axios";
import { Button, Input, message, Space } from "antd";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message1, setMessage1] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const chUserName = (e) => {
    setUserName(e.target.value);
  };

  const chEmail = (e) => {
    setEmail(e.target.value);
  };

  const chPassword = (e) => {
    setPassword(e.target.value);
  };

  const chAge = (e) => {
    setAge(e.target.value);
  };

  const chPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendReq = () => {
    messageApi.open({
      type: "loading",
      content: "Loading...",
      duration: 0.5,
    });

    axios
      .post("http://localhost:5000/user/register", {
        userName,
        email,
        password,
        age,
        phoneNumber,
      })
      .then((result) => {
        console.log(result);
        setMessage1(result.data.message);
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
      className="Register"
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
        placeholder="User Name"
        onChange={chUserName}
      />
      <Input
        style={{ maxWidth: 200, marginBottom: 10 }}
        placeholder="Age"
        onChange={chAge}
      />
      <Input
        style={{ maxWidth: 200, marginBottom: 10 }}
        placeholder="Phone Number"
        onChange={chPhoneNumber}
      />
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
        Register
      </Button>
    </div>
  );
};

export default Register;
