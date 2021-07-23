import React, { useContext, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import { useHistory } from "react-router";
import "./Routes.css";

export const RouteList = () => {
  const { routes, getRoutes } = useContext(RoutesContext);
  const history = useHistory();

  useEffect(() => {
    console.log("RoutesList: useEffect - getRoutes");
    getRoutes();
  }, []);

  return (
    <>
      <div>
        <section className="route_list">
          <div className="route_header">
            <img
              src="https://res.cloudinary.com/ddaeunjfu/image/upload/c_crop,g_north,h_791,w_2000,y_175/v1626994978/Arete/Backgrounds/climber1_sbexfc.jpg"
              alt="mountain landscape"
              className="routes_img"
            />
            <h1 className="routes_title">Routes</h1>
          </div>
        </section>
      </div>
      <section>
        <button
          className="btn"
          onClick={() => {
            history.push(`routes/create`);
          }}
        >
          Create New Route
        </button>
        {console.log("RouteList - Render", routes)}
        {routes.map((route) => {
          return <RouteCard key={route.id} route={route} />;
        })}
      </section>
    </>
  );
};
