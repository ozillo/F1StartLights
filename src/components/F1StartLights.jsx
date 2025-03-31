import React, { useState, useEffect } from "react";
import "./F1StartLights.css";

const F1StartLights = () => {
  const [lights, setLights] = useState([false, false, false, false]);
  const [isStarting, setIsStarting] = useState(false);
  const [raceStarted, setRaceStarted] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (isStarting) {
      let delay = 1000;
      let index = 0;

      const interval = setInterval(() => {
        setLights((prev) => {
          const newLights = [...prev];
          if (index < newLights.length) {
            newLights[index] = true;
          }
          return newLights;
        });
        index++;

        if (index === lights.length) {
          clearInterval(interval);
          setTimeout(() => {
            setLights([false, false, false, false]);
            setRaceStarted(true);
            setStartTime(performance.now());
          }, 1000 + Math.random() * 1000);
        }
      }, delay);
    }
  }, [isStarting]);

  const handleStart = () => {
    setIsStarting(true);
    setReactionTime(null);
    setLights([false, false, false, false]);
  };

  const handleReaction = () => {
    if (raceStarted && startTime) {
      setReactionTime(performance.now() - startTime);
      setRaceStarted(false);
      setIsStarting(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img 
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1743372708/F1/F1_75_Logo_nqhfhw.png" 
          alt="F1 75 Logo" 
          className="header-logo"
        />
      </header>
      <div className="lights">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="semaphore">
            {lights.map((on, i) => (
              <div key={i} className={`light ${on ? "on" : "off"}`}></div>
            ))}
          </div>
        ))}
      </div>
      <button className="start-button" onClick={raceStarted ? handleReaction : handleStart}>
        {raceStarted ? "Click!" : "Start Race"}
      </button>
      {reactionTime !== null && <p className="reaction-time">Reaction Time: {reactionTime.toFixed(3)} ms</p>}
    </div>
  );
};

export default F1StartLights;
