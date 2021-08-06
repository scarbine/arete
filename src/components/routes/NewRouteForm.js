import React, { useContext, useState, useEffect } from "react";
import { RoutesContext } from "./RouteProvider";
import { GradesContext } from "../grades/GradesProvider";
import { CragContext } from "../crags/CragProvider";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { WallContext } from "../walls/WallProvider";
import { AreaContext } from "../areas/AreaProvider";

import { AdminContext } from "../admin/AdminProvider";

export const NewRouteForm = () => {
  const { getRouteById, updateRoute, addRoute } = useContext(RoutesContext);
  const { wallGrades, boulderGrades, getWallGrades, getBoulderGrades } =
    useContext(GradesContext);
  const { crags, getCrags } = useContext(CragContext);
  const { walls, getWalls } = useContext(WallContext);
  const { areas, getAreas } = useContext(AreaContext);

  const { addAdminTask } = useContext(AdminContext);
  const [route, setRoute] = useState({
    routeName: "",
    firstAscensionists: "",
    routeDescription: "",
    length: "",
    type: "",
    wallGrade: 0,
    cragId: 0,
    areaId: 0,
    wallId: 0,
    drawsNeeded: "",
  });

  const [filteredWalls, setFilteredWalls] = useState([]);

  //   const [boulderGrades, setBoulderGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const currentUser = localStorage.getItem("arete_customer")

  const routeId = useParams();
  console.log(routeId);

  useEffect(() => {
    getWallGrades()
      .then(getBoulderGrades)
      .then(getCrags)
      .then(getAreas)
      .then(getWalls)
      .then(console.log("useEffect - Wall Grades", wallGrades))
      .then(console.log("useEffect - Boulder Grades", boulderGrades))
      .then(console.log("useEffect - Crags", crags));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const filtered = walls.filter(
      (wall) => wall.areaId === parseInt(route.areaId)
    );
    setFilteredWalls(filtered);
  }, [route.areaId]);

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newRoute = { ...route };
    newRoute[event.target.name] = event.target.value;
    setRoute(newRoute);
    console.log("handleControlInputChange", route);
  };

  const handleSaveRoute = () => {
    addAdminTask({
      dateSubmitted: Date.now(),
      climberId: parseInt(currentUser),
      isApproved: false,
      taskCode: 101,
      taskObj: {
        routeName: route.routeName,
        firstAscensionists: route.firstAscensionists,
        description: route.routeDescription,
        length: parseInt(route.length),
        drawsNeeded: route.drawsNeeded,
        type: route.type,
        wallGradeId: parseInt(route.wallGradeId),
        cragId: parseInt(route.cragId),
        areaId: parseInt(route.areaId),
        wallId: parseInt(route.wallId),
      },
    })
      .then(() =>
        setRoute({
          routeName: "",
          firstAscensionists: "",
          description: "",
          length: "",
          drawsNeeded: "",
          type: 0,
          wallGrade: 0,
          cragId: 0,
          areaId: 0,
          wallId: 0,
        })
      )
      .then(history.push("/routes"));
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
              value={route.routeName}
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
              type="number"
              id="length"
              name="length"
              required
              autoFocus
              className="form-control"
              placeholder="Enter Route Length..."
              value={route.length}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="number"
              id="drawsNeeded"
              name="drawsNeeded"
              required
              autoFocus
              className="form-control"
              placeholder="Enter the number of Bolts..."
              value={route.drawsNeeded}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="description"
              name="description"
              required
              autoFocus
              className="form-control"
              placeholder="Enter Description..."
              value={route.description}
              onChange={handleControlledInputChange}
            />
          </fieldset>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Type</option>
            <option key="1" value="sport">
              Sport
            </option>
            <option key="2" value="trad">
              Trad
            </option>
          </select>
          <select
            name="wallGradeId"
            id="wallGradeId"
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
          <select
            name="areaId"
            id="areaId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select an Area</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          <select
            name="wallId"
            id="wallId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Wall</option>
            {filteredWalls?.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name}
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
