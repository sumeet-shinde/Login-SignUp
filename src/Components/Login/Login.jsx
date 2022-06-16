import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";
import axios from "axios";
import { getUserData } from "../../Redux/Users/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .get(`http://localhost:8080/users?email=${email}&password=${pass}`)
      .then(({ data }) => {
        if (data.length === 0) {
          return alert("Invalid Login. Please check your email and password.");
        }
        dispatch(getUserData(data[0]));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="LoginDiv">
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <div>
        <button disabled={!name || !pass} onClick={handleLogin}>
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
