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
import { GearShopBackground } from "./backgrounds/GearShopBackground";
import { TrainingHeaderImage } from "./backgrounds/TrainingHeaderImage";
import { GearDetails } from "./components/gear/GearDetails";
import { ClimbersHeaderImage } from "./backgrounds/ClimbersHeader";
import { RoutesHeaderImage } from "./backgrounds/RoutesHeader";
import { TickListProvider } from "./components/ticklist/TickListProvider";
import { TickForm } from "./components/ticklist/TickForm";
import { ToDoListProvider } from "./components/todo/ToDoProvider";
import { TickList } from "./components/ticklist/TickList";
import { ToDoList } from "./components/todo/ToDoList";
import { FriendsList } from "./components/friends/FriendsList";
import { FriendsProvider } from "./components/friends/FriendsProvider";
import { RouteDetail } from "./components/routes/RouteDetail";
import { AreaProvider } from "./components/areas/AreaProvider";
import { WallsForm } from "./components/walls/WallsForm";
import { AreaList } from "./components/areas/AreaList";
import { NewAreaForm } from "./components/areas/NewAreaForm";
import { RouteSearch } from "./components/routes/RouteSearch";
import { WallDetail } from "./components/walls/WallDetail";
import { RouteRatingsProvider } from "./components/routeratings/RouteRatingsProvider";
import { AreaDetails } from "./components/areas/AreaDetails";
import { RouteCommentProvider } from "./components/routecoments/RouteCommentsProvider";
import { UploadRoutePics } from "./components/routes/UploadRoutePics";
import { WeatherProvider } from "./components/weather/WeatherProvider";
import { AdminProvider } from "./components/admin/AdminProvider";
import { AdminList } from "./components/admin/AdminList";
import { MainFeedProvider } from "./components/mainfeed/MainFeedProvider";
import { MainFeedList } from "./components/mainfeed/MainFeedList";

export const ApplicationViews = () => {
  return (
    <>
      <MainFeedProvider>
        <RouteProvider>
          <GradesProvider>
            <FriendsProvider>
        <Route exact path="/">
          <Home />
        </Route>
        </FriendsProvider>
        </GradesProvider>
        </RouteProvider>
      </MainFeedProvider>

      <ClimberProvider>
        <Route exact path="/climbers">
          <ClimberList />
        </Route>
      </ClimberProvider>

      <ClimberProvider>
        <RouteProvider>
          <FriendsProvider>
            <ToDoListProvider>
              <TickListProvider>
                <ClimberGearProvider>
                  <Route exact path="/climbers/detail/:climberId(\d+)">
                    <ClimberDetail />
                  </Route>
                </ClimberGearProvider>
              </TickListProvider>
            </ToDoListProvider>
          </FriendsProvider>
        </RouteProvider>
      </ClimberProvider>

      <RouteProvider>
        <ToDoListProvider>
          <TickListProvider>
            <GradesProvider>
              <Route exact path="/routes">
                <RouteList />
              </Route>
            </GradesProvider>
          </TickListProvider>
        </ToDoListProvider>
      </RouteProvider>

      <RouteProvider>
        <AdminProvider>
          <WallProvider>
            <AreaProvider>
              <CragProvider>
                <GradesProvider>
                  <Route exact path="/routes/create">
                    <NewRouteForm />
                  </Route>
                </GradesProvider>
              </CragProvider>
            </AreaProvider>
          </WallProvider>
        </AdminProvider>
      </RouteProvider>

      <RouteProvider>
        <MainFeedProvider>
        <RouteRatingsProvider>
          <RouteCommentProvider>
            <TickListProvider>
              <ToDoListProvider>
                <CragProvider>
                  <GradesProvider>
                    <Route exact path="/routes/detail/:routeId(\d+)">
                      <RouteDetail />
                    </Route>
                    <Route exact path="/routes/pics/upload">
                      <UploadRoutePics />
                    </Route>
                  </GradesProvider>
                </CragProvider>
              </ToDoListProvider>
            </TickListProvider>
          </RouteCommentProvider>
        </RouteRatingsProvider>
        </MainFeedProvider>
      </RouteProvider>

      <GearProvider>
        <ClimberGearProvider>
          <Route exact path="/gear">
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

      <RouteProvider>
        <WallProvider>
          <Route exact path="/walls">
            <WallList />
          </Route>
        </WallProvider>
      </RouteProvider>

      <RouteProvider>
        <WallProvider>
          <TickListProvider>
            <ToDoListProvider>
              <Route exact path="/walls/details/:wallId(\d+)">
                <WallDetail />
              </Route>
            </ToDoListProvider>
          </TickListProvider>
        </WallProvider>
      </RouteProvider>

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

      <WallProvider>
        <WeatherProvider>
          <CragProvider>
            <AreaProvider>
              <Route exact path="/walls/create">
                <WallsForm />
              </Route>

              <Route exact path="/areas/detail/:areaId(\d+)">
                <AreaDetails />
              </Route>
            </AreaProvider>
          </CragProvider>
        </WeatherProvider>
      </WallProvider>

      <CragProvider>
        <WeatherProvider>
          <AreaProvider>
            <Route exact path="/areas">
              <AreaList />
            </Route>

            <Route exact path="/areas/create">
              <NewAreaForm />
            </Route>
          </AreaProvider>
        </WeatherProvider>
      </CragProvider>

      <AdminProvider>
        <MainFeedProvider>
          <RouteProvider>
            <Route exact path="/admin">
              <AdminList />
            </Route>
          </RouteProvider>
        </MainFeedProvider>
      </AdminProvider>
    </>
  );
};
