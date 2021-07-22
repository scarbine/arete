import React from "react";
import {Link} from "react-router-dom"
import "./Climbers.css";

export const ClimberCard = ({ climber }) => {
  return (
    <>
      <section className="climber">
        <Link to={`/climbers/detail/${climber.id}`} className="climber_name">
          {climber.firstName} {climber.lastName}
        </Link>
        
      </section>
    </>
  );
};
