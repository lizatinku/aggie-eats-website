"use client"; // Required for Leaflet.js in Next.js App Router

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { day: "Monday", place: "Quad", coords: [38.5393, -121.7521] },
  { day: "Tuesday", place: "International Center", coords: [38.5414, -121.7547] },
  { day: "Wednesday", place: "Storer Hall", coords: [38.5440, -121.7486] },
  { day: "Thursday", place: "Orchard Park", coords: [38.5472, -121.7637] },
  { day: "Friday", place: "Quad", coords: [38.5393, -121.7521] },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#002855] text-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-[#B3A369] mb-6">
        📍 Food Truck Locations
      </h1>

      {/* Row 1: Monday, Tuesday, Friday */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
        {locations.slice(0, 3).map((loc, index) => (
          <MapCard key={index} location={loc} />
        ))}
      </div>

      {/* Row 2: Wednesday, Thursday */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {locations.slice(3, 5).map((loc, index) => (
          <MapCard key={index} location={loc} />
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        * Locations & times are subject to change. *
      </p>
    </div>
  );
}

const MapCard = ({ location }) => (
  <div className="bg-[#0A1733] border border-[#B3A369] rounded-xl shadow-lg p-6">
    <h2 className="text-2xl font-semibold text-[#B3A369] border-b pb-2 text-center">
      {location.day} - {location.place}
    </h2>
    <div className="mt-4">
      <MapContainer center={location.coords} zoom={14} className="h-64 w-full rounded-lg shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location.coords}>
          <Popup>
            <strong>{location.day} - {location.place}</strong> <br />
            11:00 AM - 2:00 PM or until sold out
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
);
