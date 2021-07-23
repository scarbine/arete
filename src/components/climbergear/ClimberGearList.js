import React, { useContext, useEffect } from "react";
import { ClimberGearContext } from "./ClimberGearProvider";
import { ClimberGearCard } from "./ClimberGearCard";
import { useParams , useHistory} from "react-router";

import "./ClimberGear.css";

export const ClimberGearList = () => {
  const { climberGear, getClimberGear } = useContext(ClimberGearContext);

  const climberIdAsString  = useParams();
  const currentUser = parseInt(localStorage.getItem('arete_customer'))
  const climberId = parseInt(climberIdAsString.climberId)
  const id = (climberId ? climberId : currentUser)

  const history = useHistory()
  
  console.log("Climber Gear List ",climberIdAsString ,climberId, currentUser, id)


  useEffect(() => {
    console.log("useEffect: getClimberGear", "ClimberId:", climberId);
    getClimberGear();
  }, []);

  const foundGearList = climberGear?.filter((cGear) => id === cGear.climberId)

  console.log(foundGearList)
  
  return (
    <>
    <h1 className="gear_list_header">{((currentUser === climberId) ? ("My Gear List"): ("Gear List"))}</h1>

  {((currentUser === climberId )? (<><button className="btn">Edit Gear List</button>
  <button onClick={()=>history.push("/gear")}className="btn">Add New Gear</button></>) : <></>)}

   {/* <button className="btn">Edit Gear List</button>
   <button onClick={()=>history.push("/gear")}className="btn">Add New Gear</button> */}
    <section className=" gear">
      {console.log("ClimberGearList - Render: climberGear", climberGear)}
      {foundGearList.map((climbGear) => {
        return <ClimberGearCard key={climbGear.id} climbGear={climbGear}/>
      })}
      
      
    </section>
  
    </>
  );
};
