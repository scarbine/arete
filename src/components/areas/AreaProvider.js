import React, { createContext, useState } from "react";

export const AreaContext = createContext();

export const AreaProvider = (props) => {
  const [areas, setAreas] = useState([
	 
  ]);

  const [area, setArea] = useState([])

  const [searchTerms, setSearchTerms] = useState("")

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

  const getAreaById = (id) =>{
    return fetch(`http://localhost:8088/areas/${id}`)
    .then(res => res.json())
    .then(setArea)
  }

  return (
    <AreaContext.Provider value={{area, areas, getAreas, addArea,searchTerms,setSearchTerms,getAreaById }}>
      {props.children}
    </AreaContext.Provider>
  );
};
