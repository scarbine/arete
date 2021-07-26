import React, { useContext, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import { useHistory } from "react-router";
import "./Routes.css";

export const RouteList = () => {
  const { routes, getRoutes } = useContext(RoutesContext);
  const history = useHistory();

  useEffect(() => {
    getRoutes();
  }, []);

  return (
    <>
      
        <section className="route_list">
        <button
          className="btn"
          onClick={() => {
            history.push(`routes/create`);
          }}
        >
          Create New Route
        </button>
        {routes.map((route) => {
          return <RouteCard key={route.id} route={route} />;
        })}
      </section>
    </>
  );
};
