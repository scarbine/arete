import React, {useState, useContext, useEffect} from "react";
import "./Routes.css";
import { useParams } from "react-router";
import { RoutesContext } from "./RouteProvider";

export const RouteDetail= () => {

const {route, getRouteById} = useContext(RoutesContext)

// const [route, setRoute] = useState()

const routeIdAsString = useParams()
const routeId = parseInt(routeIdAsString.routeId)



useEffect(() => {
  getRouteById(routeId)
  // DONT TAKE OUT THIS CONSOLE LOG - IT IS SLOWING DOWN THE RENDER SO NESTED OBJ IN ROUTE CAN POPULATE
  console.log(route, "routeId", routeId)
}, [])



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
