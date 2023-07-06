import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(({ markerPosition }) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: markerPosition.lat, lng: markerPosition.lng }}
    >
      <Marker
        position={markerPosition}
        icon={{
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#FF0000",
          fillOpacity: 1,
          strokeWeight: 0,
        }}
      />
    </GoogleMap>
  ))
);

export default Map;
