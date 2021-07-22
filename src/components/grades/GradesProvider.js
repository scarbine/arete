import React, { createContext, useState } from "react";

export const GradesContext = createContext();

export const GradesProvider = (props) => {
  const [wallGrades, setWallGrades] = useState([]);
  const [boulderGrades, setBoulderGrades] = useState([]);

  const getWallGrades = () => {
    return fetch("http://localhost:8088/wallgrades")
      .then((res) => res.json())
      .then(setWallGrades)
      .then(console.log(wallGrades));
  };

  const getBoulderGrades = () => {
	return fetch("http://localhost:8088/bouldergrades")
	  .then((res) => res.json())
	  .then(setBoulderGrades)
	  .then(console.log(boulderGrades));
      };

  return (
    <GradesContext.Provider value={{ boulderGrades, wallGrades, getWallGrades, getBoulderGrades }}>
      {props.children}
    </GradesContext.Provider>
  );
};
