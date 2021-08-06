import React from "react";
import { useHistory } from "react-router-dom";
import "./Walls.css";

export const WallCard = ({ wall }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/walls/details/${wall.id}`);
  };

  const pillColor = `badge badge-primary badge-pill area_pill_${wall.areaId}`
  
  return (
    <li
      onClick={handleOnClick}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <h5>{wall.name}</h5>
      <span className={pillColor}>{wall.area.name}</span>
    </li>
  );
};
