import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { ClimberGearContext } from "../climbergear/ClimberGearProvider";
import { useParams } from "react-router-dom";
import { ClimberGearCard } from "../climbergear/ClimberGearCard";
import { ClimberGearList } from "../climbergear/ClimberGearList";

export const ClimberDetail = () => {
  const { getClimberById } = useContext(ClimberContext);
  const { climberGear, getClimberGear} = useContext(ClimberGearContext)
  const [climber, setClimber] = useState([]);

  const { climberId } = useParams();
 

  useEffect(() => {
    console.log("useEffect: getClimbers", climberId);
    getClimberById(climberId).then((res) => {
      setClimber(res);
    })
//    Need to get the climberGear and filter it based off of climberId
  }, []);

  return (
    <>
      <section className="climber">
        <div>
        <h3 className="climber_name">
          {climber.firstName} {climber.lastName}
        </h3>
        </div>
        <div>
        <div className="climber_email">Email: {climber.email}</div>
        <div className="climber_email">Username: {climber.userName}</div>
        <div className="climber_detail">
          Onsight Grade: {climber.onSightGradeSport}
        </div>
        <div className="climber_detail">
          Top Grade: {climber.topGradeSport}
        </div>
        <div className="climber_detail">
          Onsight Grade Boulder: {climber.onSightBoulder}
        </div>
        <div className="climber_detail">
          Top Grade Boulder: {climber.topGradeBoulder}
        </div>
        </div>
	<div>
		{/* {climberGear.map(gear=>{
			return (
			
			<ClimberGearCard key={climberGear.id} gear={gear} />
			
		)})} */}
	</div>
      </section>
    </>
  );
};
