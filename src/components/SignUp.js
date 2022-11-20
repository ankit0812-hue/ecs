import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MapModal from "./MapModal";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const types = ["Police Station", "Fire Station", "Hospital"];
  const handleClick = () => {};
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setOpen(true);
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
            <h1>SignUp</h1>
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <TextField
              select
              id="outlined-basic"
              label="Type"
              variant="outlined"
              fullWidth
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {types.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="text"
              fullWidth
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
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
              label="Email"
              variant="outlined"
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
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<AddLocationIcon />}
              style={{
                border: "1px solid #d703fc",
                color: "#d703fc",
              }}
              onClick={handleLocation}
            >
              Add Location
            </Button>
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
              SignUp
            </Button>
          </div>
          <div>
            <Link
              to="/"
              style={{
                color: "#d703fc",
              }}
            >
              Already a user? Login
            </Link>
          </div>
        </div>
      </div>
        <MapModal
          latitude={latitude}
          longitude={longitude}
          open={open}
          handleClose={handleClose}
        />
    </>
  );
};

export default SignUp;
