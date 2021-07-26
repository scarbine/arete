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
    getGearById(gearId)
      .then((res) => {
        setGear(res);
      })
      .then(window.scrollTo(0, 0));
  }, []);

  const climberId = parseInt(localStorage.getItem("arete_customer"));

  const addClimberGearObj = {
    climberId: climberId,
    gearId: parseInt(gearId),
    dateAdded: Date.now(),
  };

  const handleAddGear = () => {
    addClimberGear(addClimberGearObj);
  };

  const handleToGearShop = () => {
    history.push("/gear");
    window.scroll(0, 400);
  };

  return (
    <>
      <div className="gear_detail_background">
        <section className=" gear_detail">
          <div className="left_container">
            <img alt={gear.name} src={gear.image} className="gear_image" />
            <h3>${gear.price}</h3>
            <button
              className="add_gear_btn"
              onClick={handleAddGear}
              id={gear.id}
            >
              Add to Gear List
            </button>
            <button
              onClick={handleToGearShop}
              className="add_gear_btn"
              id={gear.id}
            >
              To Gear Shop
            </button>
          </div>
          <div className="middle_container">
            <h1 className="gear_name">{gear.name}</h1>
            <div> {gear.description}</div>
          </div>
          <div className="right_container"></div>
        </section>
      </div>
    </>
  );
};
