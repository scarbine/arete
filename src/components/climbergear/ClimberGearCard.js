import React, {useContext} from "react";
import { ClimberGearContext } from "./ClimberGearProvider";
import "./ClimberGear.css";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
import Swal from "sweetalert2";

export const ClimberGearCard = ({ climbGear }) => {
  const currentUser = parseInt(localStorage.getItem("arete_customer"))
	const {removeClimberGear} = useContext(ClimberGearContext)
const history = useHistory()

  const handleDeleteGear = () =>{
        removeClimberGear(climbGear.id)
  }

  // const handleClimberGearClick = () => {
  //     history.push(`/gear/details/${climbGear.gear.id}`)
     
  // }

  const handleGearOnClick = () => {
    Swal.fire({
      title: `<strong> <u>${climbGear?.gear.name}</u></strong>`,
      html:
       `<img src="${climbGear?.gear.image}" alt="${climbGear?.gear.name}" </div>
       <div> ${climbGear?.gear.description} </div>
       `,
      // showCloseButton: true,
      // showCancelButton: true,
      focusConfirm: false,
      // confirmButtonText:
      //   '<i class="Close"></i>',
      // confirmButtonAriaLabel: 'Close',
      // cancelButtonText:
      //   '<i class="fa fa-thumbs-down"></i>',
      // cancelButtonAriaLabel: 'Thumbs down'
    })
  }

  return (
    <section className="gear_card item">
      <img onClick={handleGearOnClick} src={climbGear?.gear.image} alt={climbGear?.gear.name} />
      <h3 onClick={handleGearOnClick} className="climbGear_name">{climbGear?.gear.name}</h3>
      {/* <h4 className="climbGear_date_Acquired">{climbGear?.gear.dateAcquired}</h4> */}
    {(currentUser === climbGear.climberId) ? (<button onClick={handleDeleteGear}className="btn remove_gear_btn" >Remove</button>): (<></>)}
    </section>
  );
};
