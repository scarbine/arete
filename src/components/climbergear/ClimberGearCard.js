import React from "react";
import "./ClimberGear.css";

export const ClimberGearCard = ({ climbGear }) => {
	console.log(climbGear)
  return (
    <section className="gear_card">
      <img src={climbGear?.gear.image} alt={climbGear?.gear.name} />
      <h3 className="climbGear_name">{climbGear?.gear.name}</h3>
    </section>
  );
};
