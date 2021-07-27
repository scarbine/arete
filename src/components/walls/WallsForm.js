import React, {useContext, useEffect, useState} from "react";
import { AreaContext } from "../areas/AreaProvider";
import { CragContext } from "../crags/CragProvider";
import { WallContext } from "./WallProvider";
import { useParams } from "react-router";

export const WallsForm = () => {

	const { crags, getCrags} = useContext(CragContext)
	const { areas, getAreas} = useContext(AreaContext)
	const {addWall} = useContext(WallContext)
	

	const [isLoading, setIsLoading] = useState(true)
	const [wall, setWall] = useState({
		name:"",
		cragId: 0,
		areaId: 0
		
	      });

	const wallId = useParams();
  	console.log(wallId);


	useEffect( ()=>{
		getCrags()
		.then(getAreas)
		.then(console.log("useEffect: areas, crags:",areas, crags, wall))
		.then(setIsLoading(false))
	},[])

	

	const handleControlledInputChange = (event) => {
		event.preventDefault();
		const newWall = { ...wall };
		newWall[event.target.name] = event.target.value;
		setWall(newWall);
		console.log("handleControlInputChange", wall);
	      };

	      const handleSaveWall = () => {
		addWall(wall);
	      };


  return (
    <>
      <form>
        <h2>Add New Wall</h2>
        <fieldset>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Enter Wall Name..."
            value={wall.name}
            onChange={handleControlledInputChange}
          />
        </fieldset>
	<select
            name="cragId"
            id="cragId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Crag</option>
            {crags.map((c) => (
              <option key={parseInt(c.id)} value={parseInt(c.id)}>
                {c.name}
              </option>
            ))}
          </select>
	  <select
            name="areaId"
            id="areaId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select an Area</option>
            {areas.map((a) => (
              <option key={parseInt(a.id)} value={parseInt(a.id)}>
                {a.name}
              </option>
            ))}
          </select>
	  <button
          className="btn"
          disabled={isLoading}
          onClick={(event) => {
            event.preventDefault();
            handleSaveWall();
          }}
        >
          {wallId ? <>Save Wall</> : <>Add Wall </>}{" "}
        </button>
      </form>
    </>
  );
};
