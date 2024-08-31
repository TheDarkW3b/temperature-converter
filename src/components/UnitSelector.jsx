import React from 'react';

export default function UnitSelector({ unit, setUnit }) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-300">Select Unit:</label>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="mt-1 p-3 w-full rounded-md border-2 border-purple-700 bg-purple-900 text-gray-100 focus:border-purple-500 focus:ring focus:ring-purple-300 transition-transform duration-200 transform hover:scale-105"
      >
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>
  );
}
