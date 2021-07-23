import React from "react";
import {Link} from "react-router-dom"
import "./Climbers.css";

export const ClimberCard = ({ climber }) => {

  const fullName = `${climber.firstName} ${climber.lastName}`
  return (
    <>
      <section className="card climber_card">
        <Link to={`/climbers/detail/${climber.id}`} className="climber_name">
          <img alt={fullName} src="https://res.cloudinary.com/ddaeunjfu/image/upload/v1627007000/Arete/climbers/avatar_osynpi.jpg"/>
          <div className="climber_card_info">{fullName}</div>
          {/* <div className="climber_card_info">
            {climber.userName}
          </div> */}
        </Link>
      </section>
    </>
  );
};
