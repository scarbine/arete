import React, { useContext, useEffect,useState } from "react";
import { GearContext } from "./GearProvider";
import { GearSearch } from "./GearSearch";
import { GearCard } from "./GearCard";
import "./Gear.css";

export const GearList = () => {
  const { gear, getGear,searchTerms } = useContext(GearContext);
  const [filteredGear, setFilteredGear] = useState([])

  useEffect(() => {
    getGear();
  }, []);

  useEffect(()=> {
    if (searchTerms !== ""){
      const subset = gear.filter(g => g.name.toLowerCase().includes(searchTerms))
      setFilteredGear(subset)
    }else{
      setFilteredGear(gear)
    }
  },[searchTerms, gear])

  return (
    <>
    <article className="gear_list_wrapper">
      <h3>Gear Shop</h3>
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
