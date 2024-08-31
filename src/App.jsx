import React from 'react';
import Snowfall from 'react-snowfall';
import TemperatureConverter from './components/TemperatureConverter';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-950 via-purple-900 to-violet-900">
      <Snowfall color="white" snowflakeCount={100} />
      <TemperatureConverter />
    </div>
  );
}
