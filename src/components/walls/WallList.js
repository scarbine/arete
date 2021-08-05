import React, { useContext, useEffect,useState } from "react";
import { WallContext } from "./WallProvider";
import { WallCard } from "./WallCard";
import { WallSearch } from "./WallSearch";
import "./Walls.css";
import { useHistory } from "react-router";


export const WallList = () => {
  const { walls, getWalls, searchTerms,setSearchTerms } = useContext(WallContext);

  const [filteredWalls, setFilteredWalls] = useState([])

  const history = useHistory();

  useEffect(() => {
    setSearchTerms("")
    getWalls();
  }, []);

  useEffect(()=>{
    if(searchTerms !== ""){
      const subset = walls.filter(wall => wall.name.toLowerCase().includes(searchTerms))
      setFilteredWalls(subset) 
    }else{
      const sortedWalls = walls.sort((a,b) => (b.areaId - a.areaId))
      console.log("sorted Walls" ,sortedWalls)
      setFilteredWalls(sortedWalls)
    }

  },[searchTerms, walls])

  const handleOnClick = () =>{
    history.push("/walls/create")
  }

  return (
    <>
    <div className="wall_list_header">
      <div className="wall_list_header_name">
      <h3>Walls</h3>
      <button className="btn to_wall_form" onClick={handleOnClick}>Add New Wall</button>
      </div>
      <div className="wall_button_search_wrapper">
      </div>
      </div>
    <article className="wall_list">
     
      <WallSearch />
      
      <ul className="wall_wrapper list-group">
        {
        filteredWalls.map((wall) => {
          return <WallCard key={wall.id} wall={wall} />;
        })}
      </ul>
      </article>
    </>
  );
};
