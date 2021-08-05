import React, { useContext, useEffect, useState } from "react";
import { CragContext } from "../crags/CragProvider";
import { AreaList } from "./AreaList";
import { AreaContext } from "./AreaProvider";
import { useHistory } from "react-router";

export const NewAreaForm = () => {
  const { addArea, getAreas } = useContext(AreaContext);
  const {crags , getCrags} =useContext(CragContext)
  const history = useHistory()

  const [area, setArea] = useState({});

  useEffect(() => {
    getAreas()
    .then(getCrags)
    .then(console.log("useEffect: areas, crags", crags, area));
  }, []);

  const handleControlledInputChange = (event) => {
    const newArea = { ...area };
    newArea[event.target.name] = event.target.value;
    setArea(newArea);
  };

  const handleSave = () => {
	addArea({
		name:area.name,
		cragId:parseInt(area.cragId)
	}).then(()=> history.push("/areas"))
  };

  return (
    <>
      <form className="new_area_form">
        <h2 className="area-form">Add New Area</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="areaName">Area name: </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoFocus
              className="form-control"
              placeholder="Area name"
              onChange={handleControlledInputChange}
              defaultValue={area.name}
            />
          </div>
        </fieldset>
	<select
            name="cragId"
            id="cragId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Crag</option>
            {crags.map((crag) => (
              <option key={crag.id} value={crag.id}>
                {crag.name}
              </option>
            ))}
          </select>

        <button className="btn" onClick={handleSave}>Add New Area</button>
      </form>

      {/* <AreaList /> */}
    </>
  );
};
