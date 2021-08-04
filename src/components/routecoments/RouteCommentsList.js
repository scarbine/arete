import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RouteCommentsCard } from "./RouteCommentCard";
import { RouteCommentsContext } from "./RouteCommentsProvider";
import Swal from "sweetalert2";

export const RouteCommentsList = () => {
  const { routeComments, getRouteComments, addRouteComment } =
    useContext(RouteCommentsContext);
  const [filteredRouteComments, setFilteredRouteComments] = useState([]);

  const currentUser = localStorage.getItem("arete_customer");

  const { routeId } = useParams();

  useEffect(() => {
    getRouteComments();
  }, []);

  useEffect(() => {
    const filtered = routeComments.filter(
      (rc) => rc.routeId === parseInt(routeId)
    );
    const sorted = filtered.sort((a,b)=> b.id - a.id)
    setFilteredRouteComments(sorted);
    console.log(routeComments, parseInt(routeId));
  }, [routeId, routeComments]);

//   const handleAddComment = () => {
//     Swal.fire({
//       title: "Submit your Comment",
//       input: "textarea",
//       inputAttributes: {
//         autocapitalize: "off",
//       },
//       showCancelButton: true,
//       confirmButtonText: "Submit",
//       showLoaderOnConfirm: true,
//       preConfirm: (text) => {
//         const comment = {
//           comment: text,
//           dateAdded: Date.now(),
//           climberId: parseInt(currentUser),
//           routeId: parseInt(routeId),
//         };
//         addRouteComment(comment);
//         console.log(comment);
//       },
//       allowOutsideClick: () => !Swal.isLoading(),
//     })

//   };

  return (
    <>
      {/* <button className="btn" onClick={handleAddComment}>
        Add Comment
      </button> */}
      {filteredRouteComments.map((routeComment) => {
        return (
          <RouteCommentsCard
            key={routeComment.id}
            routeComment={routeComment}
          />
        );
      })}
    </>
  );
};
