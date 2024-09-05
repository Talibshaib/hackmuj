"use client";

import React, { useEffect } from "react";
import store from "../store/store";
import Image from "next/image";
import Group from "../assets/Group.png"; // Ensure this path is correct

const AdminPanel = () => {
  const { filters, setFilter, sosMessages, addSosMessage } = store();

  const handleSOSClick = () => {
    addSosMessage({
      id: sosMessages.length + 1,
      location: "Unknown",
      time: new Date().toLocaleString(),
    });
    alert("SOS message received!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 pr-20 pl-20">
      <header className="flex flex-grow mb-5 overflow-x-auto space-x-4">
        <div className="flex-shrink-0 bg-gray-300 h-48 w-64 rounded-md flex items-center justify-center relative">
          <Image
            src={Group}
            alt="Flood"
            layout="fill"
            className="rounded-md opacity-80 border-2 border-gray-300"
          />
        </div>
        <div className="flex-shrink-0 bg-gray-300 h-48 w-64 rounded-md flex items-center justify-center relative">
          <Image
            src={Group}
            alt="Flood"
            layout="fill"
            className="rounded-md opacity-80 border-2 border-gray-300"
          />
        </div>
        <div className="flex-shrink-0 bg-gray-300 h-48 w-64 rounded-md flex items-center justify-center relative">
          <Image
            src={Group}
            alt="Flood"
            layout="fill"
            className="rounded-md opacity-80 border-2 border-gray-300"
          />
        </div>
        {/* Add more images as needed */}
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <button
          className="bg-yellow-300 py-2 px-4 rounded-md shadow-md font-semibold"
          onClick={() => alert("Evacuation process initiated!")}
        >
          Evacuation
        </button>
        <button
          className="bg-yellow-300 py-2 px-4 rounded-md shadow-md font-semibold"
          onClick={handleSOSClick}
        >
          SOS
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
        <input
          type="text"
          placeholder="Filter"
          className="border p-2 rounded-md flex-grow bg-white text-gray-700"
          onChange={(e) => setFilter("filter", e.target.value)}
        />
        <select
          className="border p-2 rounded-md text-gray-700"
          value={filters.country}
          onChange={(e) => setFilter("country", e.target.value)}
        >
          <option value="">Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add more country options */}
        </select>
        <select
          className="border p-2 rounded-md text-gray-700"
          value={filters.disaster}
          onChange={(e) => setFilter("disaster", e.target.value)}
        >
          <option value="">Disaster</option>
          <option value="Flood">Flood</option>
          <option value="Earthquake">Earthquake</option>
        </select>
      </div>

      <div className="bg-gray-300 h-96 w-full rounded-md mb-5">
        <h3 className="p-4 ">Map</h3>
      </div>

      {/* Bottom Cards/Sections */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-300 h-32 flex-1 rounded-md p-4">
          <h3>SOS Messages:</h3>
          <ul className="list-disc pl-5">
            {sosMessages.map((msg) => (
              <li key={msg.id}>
                {msg.time} - {msg.location}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-300 h-32 flex-1 rounded-md p-4">
          {/* Add any other information */}
          <h3>Additional Info</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
