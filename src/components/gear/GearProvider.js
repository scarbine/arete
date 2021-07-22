import React, { useState, createContext } from "react";

export const GearContext = createContext();

export const GearProvider = (props) => {
  const [gear, setGear] = useState([]);

  const getGear = () => {
    return fetch("http://localhost:8088/gears")
      .then((res) => res.json())
      .then(setGear);
  };



  return (
    <GearContext.Provider value={{ gear, getGear }}>
      {props.children}
    </GearContext.Provider>
  );
};