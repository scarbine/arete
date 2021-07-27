import React from "react";
import { useHistory } from "react-router-dom";
import "./Walls.css";

export const WallCard = ({ wall }) => {

  const history = useHistory()

  const handleOnClick = () => {
    history.push(`/walls/details/${wall.id}`)
   
  }
  return (
    <section className="wall">
      <button className="btn" onClick={handleOnClick}>
      <h3 className="wall_name">{wall.name}</h3>
      </button>
      <div className="wall_crag">{wall.crag.name}</div>
      <div className="wall_area">{wall.area.name}</div>
      <div className="wall_description">{wall.description}</div>
    </section>
  );
};
