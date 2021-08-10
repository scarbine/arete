import React, { useContext, useState } from "react";
import axios from "axios";
import { RoutesContext } from "./RouteProvider";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { MainFeedContext } from "../mainfeed/MainFeedProvider";

export const UploadRoutePics = () => {
  const { routeId, addRoutePic } = useContext(RoutesContext);
  const { addMainFeed} = useContext(MainFeedContext)
  console.log("routeID State", routeId);

  const history = useHistory();

  const [imageSelected, setImageSelected] = useState("");

  const currentUser = localStorage.getItem("arete_customer");

  const handleAddFile = () => {
    if (imageSelected) {
      console.log("im here", imageSelected);
      const formData = new FormData();
//       const approvedObj = {
// 	routeName: task.taskObj.routeName,
// 	firstAscensionists: task.taskObj.firstAscensionists,
// 	description: task.taskObj.description,
// 	length: parseInt(task.taskObj.length),
// 	type: task.taskObj.type,
// 	wallGradeId: task.taskObj.wallGradeId,
// 	cragId: task.taskObj.cragId,
// 	areaId: task.taskObj.areaId,
// 	wallId: task.taskObj.wallId,
// 	drawsNeeded: task.taskObj.drawsNeeded,
// 	climberId: task.climber.id
//       };
  
formData.append("file", imageSelected);
formData.append("upload_preset", "arete-app");
axios
.post(
	"https://api.cloudinary.com/v1_1/ddaeunjfu/image/upload",
	formData
        )
        .then((res) => {
		const routePicObj = {
			picURL: res.data.secure_url,
			climberId: parseInt(currentUser),
			routeId: routeId,
			dateAdded: Date.now(),
		};
		const mainFeedObj = {
		    
		    datePosted: 1628276340724,
		    climberId: parseInt(currentUser),
		    postType: 301,
		    feedObj: routePicObj
		    
		}
          console.log(routePicObj, mainFeedObj);
          addRoutePic(routePicObj);
	  addMainFeed(mainFeedObj)
        })
        .then(history.push(`/routes/detail/${routeId}`));
    } else {
      Swal.fire({
        icon: "error",
        title: "No file selected! <br>Please choose a file.",
        width: 600,
        padding: "3em",
        background: "#fff url(/images/trees.png)",
        backdrop: `
	  rgba(0,0,123,0.4)
	  left top
	  no-repeat
	`,
      });
    }
  };

  return (
    <>
      <form className="form submit_pic">
        <h5>Choose Your Image to Upload</h5>
        <input
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        ></input>

        <div className="btn" onClick={handleAddFile}>
          Upload Image
        </div>
      </form>
    </>
  );
};
