import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Popover } from "@mui/material";
import Popup from "./Popup";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 28.615795,
  lng: 77.209301,
};
const mark = {
  lat: 28.615795,
  lng: 77.209301,
};
const mark1 = {
  lat: 28.6714,
  lng: 77.2692,
};
const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDnBpOOFvc8_7QE1diPvkJle6q8Fst2Djc",
  });
  const [open, setOpen] = React.useState(false);
  const [map, setMap] = React.useState(null);
  const [popPosition, setPopPosition] = React.useState([0, 0]);

  const handleClick = (event) => {
    setPopPosition([event.domEvent.x, event.domEvent.y]);
    setOpen(true);
  };

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = (_) => {
    setMap(null);
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
        }}
      >
        <Marker position={mark} onClick={handleClick} />
        <Popover
          id={"928nalsu080"}
          open={open}
          onClose={() => {
            setPopPosition([]);
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{
            borderRadius: "50px",
          }}
        >
          <Popup handleClose={() => setOpen(false)} />
        </Popover>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default MapComponent;
