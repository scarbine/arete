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
    <> <div>
      <section className="climbers_list">
        <div className="climber_header">
          <img
            className="climber_img"
            alt="climber"
            src="https://res.cloudinary.com/ddaeunjfu/image/upload/c_crop,g_north,h_708,w_1920/v1627005099/Arete/Backgrounds/climber.6_xjnu4i.jpg"
          />
          <h1 className="climbers_title"> Climbers </h1>
        </div>
      </section>
      </div>
      
      <div className="climber_list">
        {console.log("ClimbersList - Render", climbers)}
        {climbers.map((climber) => {
          return <ClimberCard key={climber.id} climber={climber} />;
        })}
      </div>
      
    </>
  );
};
