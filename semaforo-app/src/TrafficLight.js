import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const cycle = ['red', 'yellow', 'green'];
  const [activeLight, setActiveLight] = useState(cycle[0]);

  const handleClick = (color) => {
    setActiveLight(color);
  };

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === 'red' ? 'active' : ''}`} onClick={() => handleClick('red')}></div>
      <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`} onClick={() => handleClick('yellow')}></div>
      <div className={`light green ${activeLight === 'green' ? 'active' : ''}`} onClick={() => handleClick('green')}></div>
    </div>
  );
};

export default TrafficLight;
