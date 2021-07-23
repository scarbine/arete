import React from "react";
import "./Routes.css";

export const RouteCard = ({ route }) => {
  return (
    <>
      <section className="route">
        
          <div>
          <h2 className="route_detail">
            {route.routeName} {route.routeGrade}
          </h2>
          <div className="route_detail"> {route.area.name}</div>
          </div>
          <div className="route_detail">{route.wall.name}</div>
          <div className="route_detail">{route.crag.name}</div>

          <button className="button">Tick</button>
          <button className="button">To-Do</button>
       
        {/* <img className="route_image" src={route.image} alt={route.name}/> */}
      </section>
    </>
  );
};
