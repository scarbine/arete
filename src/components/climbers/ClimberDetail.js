import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { useParams } from "react-router-dom";
import { FriendsList } from "../friends/FriendsList";

export const ClimberDetail = () => {
  const { climber, getClimberById } = useContext(ClimberContext);



  
  
  const climberIdAsString = useParams();
  const climberId = parseInt(climberIdAsString.climberId);
  
  useEffect(() => {
    getClimberById(climberId)
    
  }, []);
  const fullName = `${climber.firstName} ${climber.lastName}`;

  return (
    <>
      <section className="climber">
        <div className="climber_badge">
          <img alt={fullName} src={climber.profile_pic} />
          <h3 className="climber_name">{climber.userName}</h3>
        </div>
        <div className="climber_details">
          <div className="climber_email">Email: {climber.email}</div>
          <div className="climber_email">
            Name {climber.firstName} {climber.lastName}
          </div>
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
          {/* {friends? (<button>Add friend</button>):(<></>)} */}
        </div>
        <div>
          {/* {climberGear.map(gear=>{
			return (
			
			<ClimberGearCard key={climberGear.id} gear={gear} />
			
		)})} */}
        </div>
      </section>
      <div>
        <FriendsList />
      </div>
    </>
  );
};
