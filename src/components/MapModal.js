import React from "react";
import Dialog from "@mui/material/Dialog";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "780px",
};
const MapModal = (props) => {
  const center = {
    lat: props.latitude,
    lng: props.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDnBpOOFvc8_7QE1diPvkJle6q8Fst2Djc",
    libraries: ["places", "localContext"],
  });
  const [map, setMap] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [places, setPlaces] = React.useState([]);

  const searchBox = React.useRef(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
    console.log("Hello");
  };

  const onSearchLoad = (ref) => {
    searchBox.current = ref;
  };

  const onPlacesChanged = () => {
    if (!searchBox.current) {
      console.log("Not yet initialized");
      return;
    }
    console.log(searchBox.current.getPlace());
  };

  const onUnmount = (_) => {
    setMap(null);
  };
  return isLoaded ? (
    <Dialog open={props.open} onClose={props.handleClose}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
        }}
      ></GoogleMap>
    </Dialog>
  ) : (
    <></>
  );
};

export default MapModal;
