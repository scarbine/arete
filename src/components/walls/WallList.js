import React, { useContext, useEffect } from "react";
import { WallContext } from "./WallProvider";
import { WallCard } from "./WallCard";
import "./Walls.css";

export const WallList = () => {
  const { walls, getWalls } = useContext(WallContext);

  useEffect(() => {
    console.log("useEffect - getWalls");
    getWalls();
  }, []);

  return (
    <section className="wall_list">
      {console.log("WallList - Render", walls)}
      {walls.map((wall) => {
        return <WallCard key={wall.id} wall={wall} />;
      })}
    </section>
  );
};