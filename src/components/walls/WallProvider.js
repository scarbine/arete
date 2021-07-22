import React, { useState, createContext } from "react";

export const WallContext = createContext();

export const WallProvider = (props) => {
  const [walls, setWalls] = useState([]);

  const getWalls = () => {
    return fetch("http://localhost:8088/walls?_expand=area")
      .then((res) => res.json())
      .then(setWalls);
  };

  return (
    <WallContext.Provider value={{ walls, getWalls }}>
      {props.children}
    </WallContext.Provider>
  );
};
