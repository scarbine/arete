import React from "react";
import {Link} from "react-router-dom"
import "./Climbers.css";

export const ClimberCard = ({ climber }) => {
  return (
    <>
      <section className="card">
        <div>
        <Link to={`/climbers/detail/${climber.id}`} className="climber_name">
          <div>{climber.firstName} {climber.lastName}</div>
          <div>
            {climber.userName}
          </div>
        </Link>
        </div>
     
      </section>
    </>
  );
};
