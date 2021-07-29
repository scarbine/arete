import React, { useContext, useEffect, useState } from "react";
import { ClimberCard } from "./ClimberCard";
import { ClimberContext } from "./ClimberProvider";
import "./Climbers.css";
import { ClimberSearch } from "./ClimberSearch";

export const ClimberList = () => {
  const { climbers, getClimbers, searchTerms } = useContext(ClimberContext);
  const [filteredClimbers, setFilteredClimbers] = useState([]);

  useEffect(() => {
    getClimbers();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = climbers.filter((climber) =>
        climber.lastName.toLowerCase().includes(searchTerms)
      );
      setFilteredClimbers(subset);
    } else {
      setFilteredClimbers(climbers);
    }
  }, [searchTerms, climbers]);

  return (
    <>
      <div className="climber_list_container">
        <div className="climber_list_header">
          <h3>Climbers</h3>
          <ClimberSearch />
        </div>
        {/* <section className="climber_list_wrapper"> */}
          {/* <div className="climbers_search"></div> */}
          <div className="climber_list">
            {filteredClimbers.map((climber) => {
              return <ClimberCard key={climber.id} climber={climber} />;
            })}
          </div>
        {/* </section> */}
      </div>
    </>
  );
};
