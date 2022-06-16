import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { regUserRequest } from "../../Redux/Users/action";
import "./Register.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRegex = /\S+@\S+\.\S+/;

  const handleRegister = () => {
    if (!emailRegex.test(email)) {
      alert("Please Enter valid email id.");
    }

    if (pass !== conf) {
      return alert("Password is not matching.");
    }

    if (pass.length <= 3) {
      return alert("Password must be more than 3 characters.");
    }
    dispatch(regUserRequest(name, email, pass));
  };

  return (
    <div className="RegisterDiv">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={conf}
        onChange={(e) => {
          setConf(e.target.value);
        }}
      />
      <br />
      <div>
        <button
          disabled={!name || !email || !pass || !conf}
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
