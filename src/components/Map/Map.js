
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];

export default function Map() {
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAT9VAvrFI7vkgVqICSlz80_AfnCO1mR9o",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={11}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <Marker
              key={id}
              lat={lat}
              lng={lng}
              text={id}
              tooltip={title}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}