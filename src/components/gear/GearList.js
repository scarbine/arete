import React, { useContext, useEffect } from "react";
import { GearContext } from "./GearProvider";
import { GearCard } from "./GearCard";
import "./Gear.css";

export const GearList = () => {
  const { gear, getGear } = useContext(GearContext);

  useEffect(() => {
    getGear();
  }, []);

  return (
    <>
        <section className="gear">
          {gear.map((g) => {
            return <GearCard key={g.id} gear={g} />;
          })}
        </section>
      
    </>
  );
};
