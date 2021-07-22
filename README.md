# Reactive Arete: A Climbers Companion

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## What is Arete?

Arete is app to help climbers plan trips, log their climb history, manage their gear, and explore routes. 



To start you off, here's an example of what some of the resources in your API should look like once it's populated with some data from your application.

### climbers

```json
{
      "id": 2,
      "firstName": "Sam",
      "lastName": "Boulder",
      "email": "me@me.com",
      "userName": "sam",
      "onSightGradeSport": "11a",
      "topGradeSport": "11c",
      "onSightBoulder": "V5",
      "topGradeBoulder": "V5"
    }
```

### climberGear

```json
{
      "id": 1,
      "climberId": 1,
      "gearId": 1
    }
```

### routes

```json
{
      "id": 1,
      "routeName": "Amarillo  Sunset",
      "routeGrade": "5.11b",
      "firstAscensionists": "Kipp Trummel",
      "length": 50,
      "type": "sport",
      "image": "https://res.cloudinary.com/ddaeunjfu/image/upload/c_scale,w_350/v1626295008/Arete/Routes/amarillo_sunset_diyacd.jpg",
      "description": "Amazing line. One of the best 11's in the Red. Pull through unique moves on large holds on an exposed striking wall.",
      "cragId": 1,
      "wallId": 1,
      "areaId": 1,
      "cityId": 1,
      "stateId": 18,
      "countyId": 1,
      "countryId": 1
    }
```

