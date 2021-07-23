import React, { useContext } from "react";
import { ClimberGearContext } from "../climbergear/ClimberGearProvider";
import { Link } from "react-router-dom";
import "./Gear.css";

export const GearCard = ({ gear }) => {
  const { addClimberGear } = useContext(ClimberGearContext);

  const climberId = parseInt(localStorage.getItem("arete_customer"));
  console.log(climberId);
  const addClimberGearObj = {
    climberId: climberId,
    gearId: gear.id,
  };

  // const handleAddGear = () => {
  //     addClimberGear(addClimberGearObj)
  //     .then(window.alert("This gear has been added to your list!"))
  // }
  return (
    <>
    <Link className="gear_detail_link" to={`/gear/details/${gear.id}`} gear={gear}>
      <section className="gear_card">
        <img className="gear_card_image"src={gear.image} alt={gear.name} />
        <h3 className="gear_name">{gear.name}</h3>
        {/* <button onClick={handleAddGear} id={gear.id}>Add to My Gear List</button> */}
      </section>
      </Link>
    </>
  );
};
