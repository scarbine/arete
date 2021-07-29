import React, { useContext, useEffect, useState } from "react";
import { AreaContext } from "./AreaProvider";
import { AreaCard } from "./AreaCard";
import { useHistory } from "react-router-dom";
import "./Area.css";
import { AreaSearch } from "./AreaSearch";

export const AreaList = () => {
  const { areas, getAreas, searchTerms } = useContext(AreaContext);
  const [filteredAreas, setFilteredAreas] = useState([])
  const history = useHistory();

  useEffect(() => {
    getAreas().then(console.log(areas));
  }, []);

  useEffect(()=> {
	  if(searchTerms !== ""){
		  const subset = areas.filter(area => area.name.toLowerCase().startsWith(searchTerms))
		  setFilteredAreas(subset)
	  }else{
		  setFilteredAreas(areas)
	  }
  },[searchTerms,areas])

  const handleOnClick = () => {
    history.push("areas/create");
  };

  return (
    <>
    <div className="area_list_header">
        <h3>Areas</h3>
        <button className="btn to_area_form" onClick={handleOnClick}>Add New Area</button>
	</div>
      <section className="area_list">
	<AreaSearch />
        {filteredAreas.map((area) => {
          return (
            <AreaCard key={area.id} area={area}>
              {area.name}
            </AreaCard>
          );
        })}
      </section>
    </>
  );
};
