import React, { useContext } from "react";
import { RoutesContext } from "./RouteProvider";

export const RouteSearch = () => {
  const { setSearchTerms } = useContext(RoutesContext);

  return (
    <>
      Route Search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for Route..."
      />
    </>
  );
};
