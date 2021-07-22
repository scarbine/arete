import React, { useContext, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import { useHistory } from "react-router";
import "./Routes.css";

export const RouteList = () => {
  const { routes, getRoutes } = useContext(RoutesContext);
  const history = useHistory()

  useEffect(() => {
    console.log("RoutesList: useEffect - getRoutes");
    getRoutes();
  }, []);

  return (
    <section className="route_list">
      <h1 className="routes-header">Routes</h1>
      <button className="btn" onClick={()=>{
        history.push(`routes/create`)
      }}>Create New Route</button>
      {console.log("RouteList - Render", routes)}
      {routes.map((route) => {
        return <RouteCard key={route.id} route={route} />;
      })}
    </section>
  );
};
