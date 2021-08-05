import React, { useContext, useEffect, useState } from "react";
import { RoutesContext } from "./RouteProvider";
import { RouteCard } from "./RouteCard";
import { useHistory } from "react-router";
import "./Routes.css";
import { RouteSearch } from "./RouteSearch";

export const RouteList = () => {
  const { routes, getRoutes, searchTerms,setSearchTerms } = useContext(RoutesContext);
  const history = useHistory();

  const [filteredRoutes, setFilteredRoutes] = useState([]);

  useEffect(() => {
    setSearchTerms('')
    getRoutes();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = routes.filter((route) =>
        route.routeName.toLowerCase().includes(searchTerms) 
      );
      setFilteredRoutes(subset);
    } else {
      setFilteredRoutes(routes);
    }
  }, [searchTerms, routes]);

  return (
    <>
    <div className="route_list_header">
      <div className="route_list_header_name">
        <h3>Routes</h3>
        <button
          className="btn to_route_list_form"
          onClick={() => {
            history.push(`routes/create`);
          }}
        >
          Create New Route
        </button>
          <RouteSearch />
        </div>
        </div>
      <section className="route_list">
        <div className="route_search">
         
        </div>
        {filteredRoutes.map((route) => {
          return <RouteCard key={route.id} route={route} />;
        })}
      </section>
    </>
  );
};
