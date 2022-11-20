import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = () => {};
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        style={{
          padding: "20px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "5px",
          width: "30%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            margin: "0px !important",
          }}
        >
          <h1>Login</h1>
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#d703fc",
            }}
            onClick={handleClick}
          >
            Login
          </Button>
        </div>
        <div>
          <Link
            to="/signup"
            href="#"
            style={{
              color: "#d703fc",
            }}
          >
            Need to create an account? SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
