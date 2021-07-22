import React, { useState, createContext } from "react";

export const ClimberContext = createContext();

export const ClimberProvider = (props) => {
  const [climbers, setClimbers] = useState([]);

  const getClimbers = () => {
    return fetch("http://localhost:8088/climbers")
      .then((res) => res.json())
      .then(setClimbers);
  };

  const getClimberById = (id) => {
	  return fetch( `http://localhost:8088/climbers/${id}`)
	  .then(res=>res.json())
  }

  return (
    <ClimberContext.Provider value={{ climbers, getClimbers, getClimberById }}>
      {props.children}
    </ClimberContext.Provider>
  );
};
