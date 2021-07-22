import React, { useContext, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import "./Routes.css";

export const RouteList = () => {
  const { routes, getRoutes } = useContext(RoutesContext);

  useEffect(() => {
    console.log("RoutesList: useEffect - getRoutes");
    getRoutes();
  }, []);

  return (
    <section className="route_list">
      {console.log("RouteList - Render", routes)}
      {routes.map((route) => {
        return <RouteCard key={route.id} route={route} />;
      })}
    </section>
  );
};
