import React, { createContext, useState } from "react";

export const AreaContext = createContext();

export const AreaProvider = (props) => {
  const [areas, setAreas] = useState([]);

  const getAreas = () => {
    return fetch("http://localhost:8088/areas?_expand=crag")
      .then((res) => res.json())
      .then(setAreas);
  };

  const addArea = (areaObj) => {
	  return fetch("http://localhost:8088/areas",{
		  method:"POST",
		  headers: {
			  "Content-Type": "application/json"
		  },
		  body: JSON.stringify(areaObj)
	  })
  }

  return (
    <AreaContext.Provider value={{ areas, getAreas, addArea }}>
      {props.children}
    </AreaContext.Provider>
  );
};
