import React, { useContext, useEffect, useState } from "react";
import { GearContext } from "./GearProvider";
import { GearSearch } from "./GearSearch";
import { GearCard } from "./GearCard";
import "./Gear.css";

export const GearList = () => {
  const { gear, getGear, searchTerms, setSearchTerms } =
    useContext(GearContext);
  const [filteredGear, setFilteredGear] = useState([]);

  useEffect(() => {
    setSearchTerms("");
    getGear();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = gear.filter((g) =>
        g.name.toLowerCase().includes(searchTerms)
      );
      setFilteredGear(subset);
    } else {
      setFilteredGear(gear);
    }
  }, [searchTerms, gear]);

  return (
    <>
      <div className="gear_shop_header">
        <h3>Gear Shop</h3>
      </div>
      <article className="gear_list_wrapper">
        <GearSearch />
        <section className="gear">
          {filteredGear.map((g) => {
            return <GearCard key={g.id} gear={g} />;
          })}
        </section>
      </article>
    </>
  );
};
