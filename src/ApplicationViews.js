import React from "react";
import { Route } from "react-router-dom";
import { ClimberGearList } from "./components/climbergear/ClimberGearList";
import { ClimberGearProvider } from "./components/climbergear/ClimberGearProvider";
import { ClimberDetail } from "./components/climbers/ClimberDetail";
import { ClimberList } from "./components/climbers/ClimberList";
import { ClimberProvider } from "./components/climbers/ClimberProvider";
import { CragProvider } from "./components/crags/CragProvider";
import { GearList } from "./components/gear/GearList";
import { GearProvider } from "./components/gear/GearProvider";
import { GradesProvider } from "./components/grades/GradesProvider";
import { NewRouteForm } from "./components/routes/NewRouteForm";
import { RouteList } from "./components/routes/RouteList";
import { RouteProvider } from "./components/routes/RouteProvider";
import { WallList } from "./components/walls/WallList";
import { WallProvider } from "./components/walls/WallProvider";
import { Home } from "./Home";
import "./ApplicationViews.css";
import { GearShopBackground } from "./backgrounds/GearShopBackground";
import { TrainingHeaderImage } from "./backgrounds/TrainingHeaderImage";
import { GearDetails } from "./components/gear/GearDetails";
import { ClimbersHeaderImage } from "./backgrounds/ClimbersHeader";
import { RoutesHeaderImage } from "./backgrounds/RoutesHeader";
import { TickListProvider } from "./components/ticklist/TickListProvider";
import { TickForm } from "./components/ticklist/TickForm";
import { ToDoListContext, ToDoListProvider } from "./components/todo/ToDoProvider";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <ClimberProvider>
        <Route exact path="/climbers">
          <ClimbersHeaderImage />
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
        <ToDoListProvider>
        <TickListProvider>
          <GradesProvider>
            <Route exact path="/routes">
              <RoutesHeaderImage />
              <RouteList />
            </Route>
          </GradesProvider>
        </TickListProvider>
        </ToDoListProvider>
      </RouteProvider>

      <RouteProvider>
        <CragProvider>
          <GradesProvider>
            <Route exact path="/routes/create">
              <NewRouteForm />
            </Route>
          </GradesProvider>
        </CragProvider>
      </RouteProvider>

      <GearProvider>
        <ClimberGearProvider>
          <Route exact path="/gear">
            <GearShopBackground />
            <GearList />
          </Route>
        </ClimberGearProvider>
      </GearProvider>

      <GearProvider>
        <ClimberGearProvider>
          <Route exact path="/gear/details/:gearId(\d+)">
            <GearDetails />
            <ClimberGearList />
          </Route>
        </ClimberGearProvider>
      </GearProvider>

      <WallProvider>
        <Route exact path="/walls">
          <WallList />
        </Route>
      </WallProvider>

      <Route exact path="/training">
        <TrainingHeaderImage />
      </Route>

      <TickListProvider>
        <RouteProvider>
          <Route exact path="/ticks/add">
            <TickForm />
          </Route>
        </RouteProvider>
      </TickListProvider>
    </>
  );
};
