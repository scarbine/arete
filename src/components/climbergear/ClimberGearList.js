import React, { useContext, useEffect } from "react";
import { ClimberGearContext } from "./ClimberGearProvider";
import { ClimberGearCard } from "./ClimberGearCard";
import { useParams } from "react-router";
import "./ClimberGear.css";

export const ClimberGearList = () => {
  const { climberGear, getClimberGear } = useContext(ClimberGearContext);

  const climberIdAsString  = useParams();
  const climberId = parseInt(climberIdAsString.climberId)
  
  console.log(climberIdAsString ,climberId)


  useEffect(() => {
    console.log("useEffect: getClimberGear", "ClimberId:", climberId);
    getClimberGear();
  }, []);

  const foundGearList = climberGear?.filter((cGear) => climberId === cGear.climberId)

  console.log(foundGearList)

  // const climberGearArray = climberGear.filter((cGear) => cGear.climberId === {climberId})
  // console.log(climberGearArray)

  return (
    <>
    <h1 className="gear_list_header">Gear List</h1>
   <button className="btn">Edit Gear List</button>
    <section className=" gear">
      {console.log("ClimberGearList - Render: climberGear", climberGear)}
      {foundGearList.map((climbGear) => {
        return <ClimberGearCard key={climbGear.id} climbGear={climbGear} />;
      })}
      
      
    </section>
  
    </>
  );
};
