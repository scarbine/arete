import React, { useContext } from "react";
import { RoutesContext } from "./RouteProvider";
import "./Routes.css";

export const RouteSearch = () => {
  const { setSearchTerms } = useContext(RoutesContext);

  return (
    <>
      <section className="route_search_wrapper">
      
        <input
          type="text"
          className="input--wide"
          onKeyUp={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for Route..."
        />
      </section>
    </>
  );
};
