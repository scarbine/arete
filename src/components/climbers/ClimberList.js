import React, { useContext, useEffect } from "react";
import { ClimberCard } from "./ClimberCard";
import { ClimberContext } from "./ClimberProvider";
import "./Climbers.css";

export const ClimberList = () => {
  const { climbers, getClimbers } = useContext(ClimberContext);

  useEffect(() => {
    console.log("ClimbersList: useEffect - getClimbers");
    getClimbers();
  }, []);

  return (
    <>
    <h1 className="climbers_header"> Climbers </h1>
      <div className="climber_list">
        {console.log("ClimbersList - Render", climbers)}
        {climbers.map((climber) => {
		
          return <ClimberCard key={climber.id} climber={climber} />;
        })}
      </div>
    </>
  );
};
