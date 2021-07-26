import React, { useContext, useEffect } from "react";
import { ClimberCard } from "./ClimberCard";
import { ClimberContext } from "./ClimberProvider";
import "./Climbers.css";

export const ClimberList = () => {
  const { climbers, getClimbers } = useContext(ClimberContext);

  useEffect(() => {
    getClimbers();
  }, []);

  return (
    <> 
      <div className="climber_list">
        {climbers.map((climber) => {
          return <ClimberCard key={climber.id} climber={climber} />;
        })}
      </div>
      
    </>
  );
};
