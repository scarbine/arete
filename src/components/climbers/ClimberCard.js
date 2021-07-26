import React from "react";
import {Link, useHistory} from "react-router-dom"
import "./Climbers.css";

export const ClimberCard = ({ climber }) => {

  const fullName = `${climber.firstName} ${climber.lastName}`
  const history = useHistory()

  const handleOnClick = () => {
    history.push(`/climbers/detail/${climber.id}`)
    window.scroll( 0,0)

  }
  

  return (
    <>
      <section className="card climber_card">
        <div onClick={handleOnClick}  className="climber_name">
          <img alt={fullName} src={climber.profile_pic}/>
          <div className="climber_card_info">{fullName}</div>
          {/* <div className="climber_card_info">
            {climber.userName}
          </div> */}
        </div>
      </section>
    </>
  );
};
