import React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Popup = (props) => {
  return (
    <div>
      <div>
        <video controls width="400">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/webm"
          ></source>
        </video>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOnIcon />
          MH1 Amaravati VIT AP
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <Button
          variant="outlined"
          onClick={props.handleClose}
          style={{
            marginBottom: "20px",
            color: "green",
            border: "1px solid green",
          }}
          endIcon={<DoneIcon />}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          onClick={props.handleClose}
          style={{
            marginBottom: "20px",
            color: "red",
            border: "1px solid red",
          }}
          endIcon={<CloseIcon />}
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default Popup;
