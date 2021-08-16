# Reactive Arete: A Climbers Companion

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.
1. Run `npm install sweetalert2` to install Sweetalert2.
1. Run `npm install react-image-gallery` to install the image gallery.
1. Run `npm install react-rating-stars-component --save` to install the stars rating.
1. Run `npm install bootstrap` to install Bootstrap.

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
### gears

```json
{
       "id": 1,
      "image": "https://res.cloudinary.com/ddaeunjfu/image/upload/c_scale,w_200/v1626295486/Arete/Gear/quickdraw_eejn2g.png",
      "name": "Quickdraw",
      "description": "With a new snag-free HotForge keylock carabiner on top and our redesigned lightweight, easy-clipping classic HotWire carabiner on bottom                that’s colored for a visual climbing target, the Black Diamond HotForge Hybrid Draw combines smooth clipability with wiregate functionality. The 18 mm              Polyester Dogbone is not only durable and easy to grab, but it features our Straitjacket insert to keep the bottom carabiner in the optimal clipping                position.",
      "price": 15.95
    }
```

### crags

```json
{
       "id": 1,
      "name": "Red River Gorge",
      "stateId": 18,
      "city": "Slade",
      "county": "Wolfe",
      "country": "USA",
      "zipCode": 40376
    }
```
### areas

```json
{
      "id": 2,
      "name": "Muir Valley",
      "cragId": 1
    }
```
### routeComments

```json
{
        "id": 1,
      "climberId": 1,
      "routeId": 1,
      "comment": "This route is dope!",
      "dateAdded": 1627061963003
    }
```

### routeRating

```json
{
        "id": 1,
      "climberId": 1,
      "routeId": 1,
      "comment": "This route is dope!",
      "dateAdded": 1627061963003
    }
```
### states

```json
{
     "State": "Alabama",
      "Abbrev": "Ala.",
      "Code": "AL",
      "id": 1
    }
```

### wallGrades

```json
{
     "id": 1,
      "grade": "5.4"
    }
```

### boulderGrades

```json
{
     "id": 1,
      "grade": "V0"
    }
```

###friends

```json
{
      "climberId": 2,
      "userId": 4,
      "id": 1
    }
```

###ticks

```json
{
      "climberId": 5,
      "routeId": 2,
      "dateCompleted": 1627329225114,
      "id": 1
    }
```


###toDoList

```json
{
      "climberId": 5,
      "routeId": 2,
      "id": 1
    }
```

###routeGear

```json
{
      "id": 1,
      "routeId": 1,
      "dateAdded": 1627061961003,
      "gearId": 1
    }
```
###routePics

```json
{
      "picURL": "https://res.cloudinary.com/ddaeunjfu/image/upload/v1628530313/arete-app/lbmdnsqc7ltp7hfeiwpw.jpg",
      "climberId": 2,
      "routeId": 1,
      "dateAdded": 1628530314316,
      "id": 1
    }
```

###adminTasks

```json
{
         "id": 1,
      "dateSubmitted": 1628258115262,
      "climberId": 1,
      "isApproved": true,
      "isDenied": false,
      "taskCode": 101,
      "taskObj": {
        "routeName": "Tequlia Sunrise",
        "firstAscensionists": "S Ayala 2013",
        "description": "This is the bolted line on the left of this face, though due to some developer controversy, do not be surprised if no such line exists. The          bolts have disappeared and reappeared a time or two.",
        "length": "65",
        "type": "sport",
        "wallGradeId": 14,
        "cragId": 1,
        "wallId": 1,
        "areaId": 7,
        "id": 4,
        "drawsNeeded": 9
      },
      "approvedBy": 2,
      "dateApproved": 1628264291170
    }
```

