import React from "react";
import "./Walls.css";

export const WallCard = ({ wall }) => {
  return (
    <section className="wall">
      <h3 className="wall_name">{wall.name}</h3>
      {/* <div className="wall_crag">{wall.crag.name}</div> */}
      {/* <div className="wall_description">{wall.description}</div> */}
    </section>
  );
};
