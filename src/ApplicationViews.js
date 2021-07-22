import React from "react";
import { Route } from "react-router-dom";
import { ClimberGearList } from "./components/climbergear/ClimberGearList";
import { ClimberGearProvider } from "./components/climbergear/ClimberGearProvider";
import { ClimberDetail } from "./components/climbers/ClimberDetail";
import { ClimberList } from "./components/climbers/ClimberList";
import { ClimberProvider } from "./components/climbers/ClimberProvider";
import { GearList } from "./components/gear/GearList";
import { GearProvider } from "./components/gear/GearProvider";
import { RouteList } from "./components/routes/RouteList";
import { RouteProvider } from "./components/routes/RouteProvider";
import { WallList } from "./components/walls/WallList";
import { WallProvider } from "./components/walls/WallProvider";
import { Home } from "./Home";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <ClimberProvider>
        <Route exact path="/climbers">
          <ClimberList />
        </Route>
      </ClimberProvider>

      <ClimberProvider>
        <ClimberGearProvider>
          <Route exact path="/climbers/detail/:climberId(\d+)">
            <ClimberDetail />
	          <ClimberGearList />
          </Route>
        </ClimberGearProvider>
      </ClimberProvider>

      <RouteProvider>
        <Route exact path="/routes">
          <RouteList />
        </Route>
      </RouteProvider>

      <GearProvider>
        <ClimberGearProvider>
        <Route exact path="/gear">
          <GearList />
        </Route>
        </ClimberGearProvider>
      </GearProvider>

      <WallProvider>
        <Route exact path="/walls">
          <WallList />
        </Route>
      </WallProvider>
    </>
  );
};
