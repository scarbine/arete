import React, { useState, createContext } from "react";

export const GearContext = createContext();

export const GearProvider = (props) => {
  const [gear, setGear] = useState([]);
  const [ searchTerms, setSearchTerms ] =useState("")

  const getGear = () => {
    return fetch("http://localhost:8088/gears")
      .then((res) => res.json())
      .then(setGear);
  };

  const getGearById = (id) => {
    return fetch(`http://localhost:8088/gears/${id}`)
    .then((res)=> res.json())
    
   
  }



  return (
    <GearContext.Provider value={{ gear, getGear, getGearById, searchTerms, setSearchTerms }}>
      {props.children}
    </GearContext.Provider>
  );
};
