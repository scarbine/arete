import React, { useState, createContext } from "react";

export const WallContext = createContext();

export const WallProvider = (props) => {
  const [walls, setWalls] = useState([]);
  const [wall, setWall] = useState({
    crag:{},
    area:{}
  })

  const getWalls = () => {
    return fetch("http://localhost:8088/walls?_expand=area&_expand=crag")
      .then((res) => res.json())
      .then(setWalls);
  };

  const addWall = (wallObj) => {
    return fetch("http://localhost:8088/walls",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(wallObj)
    }).then(getWalls)
  }

  const getWallById = (id) => {
    return fetch(`http://localhost:8088/walls/${id}?_expand=area&_expand=crag`)
    .then(res => res.json())
    .then(setWall)
  }

  return (
    <WallContext.Provider value={{ wall, walls, getWalls, addWall, getWallById }}>
      {props.children}
    </WallContext.Provider>
  );
};
