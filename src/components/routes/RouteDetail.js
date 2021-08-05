import React, { useState, useContext, useEffect } from "react";
import "./Routes.css";
import { useParams } from "react-router";
import { RoutesContext } from "./RouteProvider";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext, ToDoListProvider } from "../todo/ToDoProvider";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";
import { RouteRatingList } from "../routeratings/RouteRatingList";
import Swal from "sweetalert2/dist/sweetalert2.all";
import { RouteCommentsList } from "../routecoments/RouteCommentsList";
import { useHistory } from "react-router-dom";
import { RoutePicsList } from "./RoutesPicsList";
import ImageGallery from 'react-image-gallery'
import { RouteCommentsContext } from "../routecoments/RouteCommentsProvider";
import ReactStars from "react-rating-stars-component"
import { RouteRatingsContext } from "../routeratings/RouteRatingsProvider";
import { RouteRatingAverage } from "../routeratings/RouteRatingAverage";




export const RouteDetail = () => {
  const { route, getRouteById, setRouteId, filteredPics,getRoutePics, routePics, setFilteredPics } = useContext(RoutesContext);
  const { addTick } = useContext(TickListContext);
  const { addTodo } = useContext(ToDoListContext);
  const {addRouteComment} = useContext(RouteCommentsContext)
  const {addRouteRating} = useContext(RouteRatingsContext)

  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  const routeIdAsString = useParams();
  const routeId = parseInt(routeIdAsString.routeId);
  const thumbWidth ="250"
	// const thumbHeight = "150"
  const fullWidth = "1250"

const [galleryImages, setGalleryImages]= useState([])
const [routeRating, setRouteRating] = useState(0)
  

  const history = useHistory()
 

  useEffect(() => {
    getRouteById(routeId);
  }, []);

  useEffect(()=>{
		getRoutePics()
	},[])
	
	useEffect(()=>{
		const filtered = routePics.filter(rp => rp.routeId === parseInt(routeId))
    const sorted = filtered.sort((a,b)=> b.id - a.id)
		console.log(sorted)
		setFilteredPics(filtered)
		
		
	},[routePics, routeId])

  
	useEffect(()=>{
    const images = filteredPics.map(routePic => {
			const [frontURL, endURL] =routePic.picURL.split('upload/')
			const picObj = {
				original:`${frontURL}upload/c_scale,w_${fullWidth}/${endURL}`,
				thumbnail:`${frontURL}upload/c_scale,w_${thumbWidth}/${endURL}`
			}
		
			return picObj
		})
    setGalleryImages(images)
		console.log("images", images)
	},[filteredPics])


  


  const handleAddTick = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to tick this route!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Tick it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newTick = {
          climberId: currentUser,
          routeId: route.id,
          dateCompleted: Date.now(),
        };
        addTick(newTick).then(
        Swal.fire(
          'Ticked!',
          'Your Tick has been Added.',
          'success'
        ))
      }
    })
  };
  const handleAddToDo = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to add this route!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add Todo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newToDo = {
          climberId: currentUser,
          routeId: route.id,
        };
        addTodo(newToDo)
      .then(
        Swal.fire(
          'Ticked!',
          'Your Todo has been Added.',
          'success'
        ))
      }
    }) 
  };

  const handleAddRoutePics = () =>{

   history.push("/routes/pics/upload")
    setRouteId(routeId)
    
  }


  const handleAddComment = () => {
    Swal.fire({
      title: "Submit your Comment",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        const comment = {
          comment: text,
          dateAdded: Date.now(),
          climberId: parseInt(currentUser),
          routeId: parseInt(routeId),
        };
        addRouteComment(comment);
        console.log(comment);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })

  };

  const ratingChanged = (newRating) =>{
    setRouteRating(newRating)
    const routeRatingObj = {
      climberId: currentUser,
      routeId: route.id,
      rating: newRating,
      ratingDate: Date.now()
    }
    addRouteRating(routeRatingObj)
    
  }

  return (
    <>
      <section className="route_info">
        <h3 className="route_header">
          {route.routeName} {route.routeGrade}
          <button className="btn" onClick={handleAddTick}>
            Tick
          </button>
          <button className="btn" onClick={handleAddToDo}>
            To-Do
          </button>
            <button className="add_route_pics btn" onClick={handleAddRoutePics}>Add Pics</button>
            <button className="btn" onClick={handleAddComment}>Comment</button>
        </h3>
        <div className="route_detail_body">
          <div className="ticks_todos_container">
            <div className="route_about">
            <h4>About</h4>
            <div className="route_detail">FA: {route.firstAscensionists}</div>
            <div className="route_detail">{route?.wall.name}</div>
            <div className="route_detail"> {route?.area.name}</div>
            <div className="route_detail">{route?.crag.name}</div>
            <RouteRatingAverage className="route_detail" routeId={routeId} />
            </div>
            <section className="routes routes_tick_list_container">
              <TickList />
            </section>
            <section className="routes routes_tick_list_container">
              <ToDoList />
            </section>
          </div>
          <article className="route_main_body">
          <section className="route_details">
           
          <div className="route_pics">
         
            <ImageGallery items={galleryImages} />
      </div>
            <div className="route_detail">{route.description}</div>
            {/* <RouteRatingList /> */}
            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" value={routeRating} isHalf={true}/>
          </section>
          <section className="route_comments">
          <RouteCommentsList />
          </section>
          </article>
        </div>
      </section>
    </>
  );
};
