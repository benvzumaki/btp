import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Perbaiki URL ikon default untuk Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Komponen kecil untuk animasi marker
const AnimatedMarker = ({ position }) => {
  useEffect(() => {
    // Buat animasi "bounce" dengan Leaflet DOM
    const markerEl = document.querySelector(".leaflet-marker-icon");
    if (markerEl) {
      markerEl.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-10px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 800,
          iterations: 2,
          easing: "ease-in-out",
        }
      );
    }
  }, []);

  return (
    <Marker position={position}>
      <Popup>
        <strong>📍 Aku di sini</strong>
      </Popup>
    </Marker>
  );
};

const Map = ({ coords }) => {
  const position = [coords.latitude, coords.longitude];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AnimatedMarker position={position} />
    </MapContainer>
  );
};

export default Map;
