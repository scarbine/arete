import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { useParams } from "react-router-dom";
import { FriendsList } from "../friends/FriendsList";
import { ClimberGearList } from "../climbergear/ClimberGearList";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";

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
    <article className="climber_detail_page">
      <section className="climber">
        <div className="climber_badge">
          <img className="climber_img" alt={fullName} src={climber.profile_pic} />
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
        </div>
        <div>
        </div>
      </section>
      <div>
        <FriendsList />
        <ClimberGearList />
        <div className="ticks_and_todos">
        <TickList />
        <ToDoList />
        </div>
      </div>
      </article>
    </>
  );
};
