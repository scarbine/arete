import React, { useContext, useEffect } from "react";
import { ClimberGearContext } from "./ClimberGearProvider";
import { ClimberGearCard } from "./ClimberGearCard";
import { useParams, useHistory } from "react-router";

import "./ClimberGear.css";

export const ClimberGearList = () => {
  const { climberGear, getClimberGear } = useContext(ClimberGearContext);

  const climberIdAsString = useParams();
  const currentUser = parseInt(localStorage.getItem("arete_customer"));
  const climberId = parseInt(climberIdAsString.climberId);
  const id = climberId ? climberId : currentUser;

  const history = useHistory();

  useEffect(() => {
    getClimberGear();
  }, []);

  const foundGearList = climberGear?.filter((cGear) => id === cGear.climberId);

  const sortedFoundGear = foundGearList.sort((a, b) => b.id - a.id);

  return (
    <>
      <article className="gear_list_wrapper">
        <h1 className="gear_list_header">
          {currentUser === climberId ? " My Gear List" : " Gear List"}
        </h1>

        {currentUser === climberId ? (
          <>
            <button onClick={() => history.push("/gear")} className="btn">
              Add New Gear
            </button>
          </>
        ) : (
          <></>
        )}

        {/* <button className="btn">Edit Gear List</button>
   <button onClick={()=>history.push("/gear")}className="btn">Add New Gear</button> */}
        <section className="outer-wrapper">
          <div className="wrapper">
            {sortedFoundGear.length === 0 ? (
              <>
                <div>Gear Bag Empty</div>
              </>
            ) : (
              sortedFoundGear.map((climbGear) => {
                return (
                  <ClimberGearCard key={climbGear.id} climbGear={climbGear} />
                );
              })
            )}
          </div>
        </section>
      </article>
    </>
  );
};
