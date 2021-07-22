import React from "react";
import "./Routes.css";

export const RouteCard = ({ route }) => {
  return (
    <>
      <section className="route">
        <h3 className="route_detail">
          {route.routeName} {route.routeGrade}
        </h3>
        <div className="route_detail">{route.wall.name}</div>
        <div className="route_detail"> {route.area.name}</div>
        <div className="route_detail">{route.crag.name}</div>
        <div className="route_detail">{route.description}</div>
        <div className="route_detail">FA: {route.firstAscensionists}</div>
        <div className="route_detail">
          Latitude:{route.latitude} Longitude: {route.longitude}
        </div>
        <button>Tick</button>
        <button>To-Do</button>
      </section>
    </>
  );
};
