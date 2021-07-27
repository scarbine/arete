import React, { useContext, useEffect, useState } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import { useHistory } from "react-router";
import "./Routes.css";

export const RouteList = () => {
  const { routes, getRoutes, searchTerms } = useContext(RoutesContext);
  const history = useHistory();

  const [filteredRoutes, setFilteredRoutes ] =useState([])

  useEffect(() => {

    getRoutes();
  }, []);

  useEffect(()=> {
    if (searchTerms!== ""){
      const subset = routes.filter(route => route.routeName.toLowerCase().includes(searchTerms))
      setFilteredRoutes(subset)
    }else{
      setFilteredRoutes(routes)
    }
  },[searchTerms, routes])

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
        {filteredRoutes.map((route) => {
          return <RouteCard key={route.id} route={route} />;
        })}
      </section>
    </>
  );
};
