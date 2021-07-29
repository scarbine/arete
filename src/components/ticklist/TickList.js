import React, { useContext, useEffect, useState } from "react";
import { TickListContext } from "./TickListProvider";
import { TickListCard } from "./TickListCard";
import { useParams, useLocation } from "react-router";
import "./Ticks.css";

export const TickList = ({climber}) => {
  const { ticks, getTicks , setFoundTicks, foundTicks } = useContext(TickListContext);


  const { climberId } = useParams();
  const { routeId } = useParams();
  // const Id = parseInt(id.climberId)
  // console.log("id", climberId, routeId);

  // const location = useLocation();



  useEffect(() => {
    getTicks()
    // .then(console.log("found Ticks", foundTicks, location));
  }, []);

 

  useEffect(() => {
    if (climber) {
	
      const filteredByClimberIdTicks = ticks.filter(
        (tick) => tick.climberId === parseInt(climberId)
      );
      const sorted = filteredByClimberIdTicks.sort((a, b) => b.id - a.id);
      setFoundTicks(sorted);
      // console.log(sorted);
    } else {
      const filteredByRouteTicks = ticks.filter(
        (tick) => tick.routeId === parseInt(routeId)
      );
      const sorted = filteredByRouteTicks.sort((a, b) => b.id - a.id);
      setFoundTicks(sorted);
    }
    climber = false
    return climber
  }, [climberId, ticks]);

  return (
    <>
      <section className="tick_list">
        <h3 className="tick_list_header">Tick List</h3>
        <div>
          {foundTicks.map((tick) => {
            return <TickListCard key={tick.id} tick={tick} />;
          })}
        </div>
      </section>
    </>
  );
};
