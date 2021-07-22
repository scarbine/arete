import React from "react";
import "./Gear.css";

export const GearCard = ({ gear }) => {
  return (
    <>
      <section className="gear_card">
	<img src={gear.image} alt={gear.name} />     
        <h3 className="gear_name">{gear.name}</h3>
        <button id={gear.id}>Add to My Gear List</button>
      </section>
    </>
  );
};
