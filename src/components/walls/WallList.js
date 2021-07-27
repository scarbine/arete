import React, { useContext, useEffect } from "react";
import { WallContext } from "./WallProvider";
import { WallCard } from "./WallCard";
import "./Walls.css";
import { useHistory } from "react-router";

export const WallList = () => {
  const { walls, getWalls } = useContext(WallContext);

  const history = useHistory();

  useEffect(() => {
    getWalls();
  }, []);

  const handleOnClick = () =>{
    history.push("/walls/create")
  }

  return (
    <>
      <button onClick={handleOnClick}>Add New Wall</button>
      <section className="wall_list">
        {walls.map((wall) => {
          return <WallCard key={wall.id} wall={wall} />;
        })}
      </section>
    </>
  );
};
