import React, { useContext, useEffect, useState } from "react";
import { GearContext } from "../gear/GearProvider";
import { ClimberGearContext } from "../climbergear/ClimberGearProvider";
import { useParams, useHistory } from "react-router";

export const GearDetails = () => {
  const { getGearById } = useContext(GearContext);
  const { addClimberGear } = useContext(ClimberGearContext);
  const { gearId } = useParams();

  const history = useHistory();

  const [gear, setGear] = useState({});

  useEffect(() => {
    console.log("useEffect - gearDetail", gearId);
    getGearById(gearId)
      .then((res) => {
        setGear(res);
      }).then(window.scrollTo(0,0))
      .then(
        console.log(
          "currentUser:",
          climberId,
          "gearObj:",
          gear,
          "gearId",
          parseInt(gearId)
        )
      );
  }, []);

  const climberId = parseInt(localStorage.getItem("arete_customer"));
  // console.log("currentUser:",climberId, "gearObj:",gear, "gearId", parseInt(gearId));
  const addClimberGearObj = {
    climberId: climberId,
    gearId: parseInt(gearId),
  };

  const handleAddGear = () => {
    addClimberGear(addClimberGearObj)
      .then(window.alert("This gear has been added to your list!"))
      .then(history.push("/gear"));
  };

  return (
    <>
    <div className="gear_detail_background">
      <section className=" gear_detail">
	      <div className="left_container">
        <img alt={gear.name} src={gear.image} className="gear_image" />
	<h3>${gear.price}</h3>
        <button className="add_gear_btn" onClick={handleAddGear} id={gear.id}>
          Add to Gear List
        </button>
	</div>
	<div className="middle_container">
        <h1 className="gear_name">{gear.name}</h1>
	<div> {gear.description}</div>
	</div>
	<div className="right_container">
	</div>
      </section>
      </div>
    </>
  );
};
