import React, { useContext, useEffect } from "react";
import { GearContext } from "./GearProvider";
import { GearCard } from "./GearCard";
import "./Gear.css";

export const GearList = () => {
  const { gear, getGear } = useContext(GearContext);

  useEffect(() => {
    console.log("GearList: useEffect - getGear");
    getGear();
  }, []);

  return (
    <>
   <h1 className="gear_list_header">Arete Gear Shop</h1>
      <section className="gear">
        {console.log("GearList: Render", gear)}
        {gear.map((g) => {
          return <GearCard key={g.id} gear={g} />;
        })}
      </section>
    </>
  );
};
