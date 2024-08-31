import React from 'react';

export default function ConvertButton({ convertTemperature }) {
  return (
    <button
      onClick={convertTemperature}
      className="w-full p-3 mt-2 text-white bg-purple-700 rounded-md hover:bg-purple-600 active:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-300 transition-transform duration-200 transform hover:scale-105"
    >
      Convert
    </button>
  );
}
