import React, { useContext, useState, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { GradesContext } from "../grades/GradesProvider";
import { CragContext } from "../crags/CragProvider";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { addRoute } from "workbox-precaching";

export const NewRouteForm = () => {
  const { getRouteById, updateRoute, addRoute } = useContext(RoutesContext);
  const { wallGrades, boulderGrades, getWallGrades, getBoulderGrades } =
    useContext(GradesContext);
  const { crags, getCrags } = useContext(CragContext);
  const [route, setRoute] = useState([]);

  //   const [boulderGrades, setBoulderGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const routeId = useParams();
  console.log(routeId);

  useEffect(() => {
    getWallGrades()
      .then(getBoulderGrades)
      .then(getCrags)
      .then(console.log("useEffect - Wall Grades", wallGrades))
      .then(console.log("useEffect - Boulder Grades", boulderGrades))
      .then(console.log("useEffect - Crags", crags));
    setIsLoading(false);
  }, []);

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newRoute = { ...route };
    newRoute[event.target.name] = event.target.value;
    setRoute(newRoute);
    console.log("handleControlInputChange", route);
  };

  const handleSaveRoute = () => {
    addRoute(route);
  };

  return (
    <>
      <form className="form">
        <h2 className="form-header">Route Info</h2>
        <div>
          <fieldset>
            <input
              type="text"
              id="routeName"
              name="routeName"
              required
              autoFocus
              className="form-control"
              placeholder="Enter Route Name..."
              value={route.name}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="firstAscensionists"
              name="firstAscensionists"
              required
              autoFocus
              className="form-control"
              placeholder="Enter First Ascensionists..."
              value={route.firstAscensionists}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="routeDescription"
              name="routeDescription"
              required
              autoFocus
              className="form-control"
              placeholder="Enter Description..."
              value={route.description}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <select
            name="routeGrade"
            id="routeGradeId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Grade</option>
            {wallGrades.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.grade}
              </option>
            ))}
          </select>
          <select
            name="cragId"
            id="cragId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Crag</option>
            {crags.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn"
          disabled={isLoading}
          onClick={(event) => {
            event.preventDefault();
            handleSaveRoute();
          }}
        >
          {routeId ? <>Save Route</> : <>Add Route </>}{" "}
        </button>
      </form>
    </>
  );
};
