import React, {useContext} from "react";
import { ClimberGearContext } from "./ClimberGearProvider";
import "./ClimberGear.css";

export const ClimberGearCard = ({ climbGear }) => {
  const currentUser = parseInt(localStorage.getItem("arete_customer"))
	const {removeClimberGear} = useContext(ClimberGearContext)


  const handleDeleteGear = () =>{
        removeClimberGear(climbGear.id)
  }

  return (
    <section className="gear_card">
      <img src={climbGear?.gear.image} alt={climbGear?.gear.name} />
      <h3 className="climbGear_name">{climbGear?.gear.name}</h3>
      <h4 className="climbGear_date_Acquired">{climbGear?.gear.dateAcquired}</h4>
    {(currentUser === climbGear.climberId) ? (<button onClick={handleDeleteGear}className="btn remove_gear_btn" >Remove</button>): (<></>)}
    </section>
  );
};
