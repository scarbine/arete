import React from "react";
import { Link } from "react-router-dom";
import "./Gear.css";

export const GearCard = ({ gear }) => {
  
  return (
    <>
    <Link className="gear_detail_link" to={`/gear/details/${gear.id}`} gear={gear}>
      <section className="gear_card">
        <img className="gear_card_image"src={gear.image} alt={gear.name} />
        <h3 className="gear_name">{gear.name}</h3>
      </section>
      </Link>
    </>
  );
};
