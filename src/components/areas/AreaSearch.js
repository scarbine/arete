import React, { useContext } from "react";
import { AreaContext } from "./AreaProvider";
import "./Area.css";

export const AreaSearch = () => {
  const { setSearchTerms } = useContext(AreaContext);

  return (
    <>
      <input
        placeholder="Search for Areas..."
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        type="text"
        className="search_bar input--wide"
      />
    </>
  );
};
