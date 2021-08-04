import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RoutesContext } from "../routes/RouteProvider";
import ImageGallery from "react-image-gallery";

export const ClimberPics = () => {
  const { routePics, getRoutePics } = useContext(RoutesContext);

  const {climberId} = useParams();
  const thumbWidth = "250";
  // const thumbHeight = "150"
  const fullWidth = "1250";

  const [galleryImages, setGalleryImages] = useState([]);
  const [filteredPics, setFilteredPics] = useState([]);

  useEffect(() => {
    getRoutePics()
    .then(console.log(routePics, parseInt(climberId)))
  }, []);

  useEffect(() => {
	  
    const filtered = routePics.filter((rp) =>  rp.climberId === parseInt(climberId));
    console.log(filtered)
    const sorted = filtered.sort((a, b) => b.id - a.id);
    console.log(sorted);
    setFilteredPics(sorted);
  }, [routePics, climberId]);

  useEffect(() => {
    const images = [];
    filteredPics.map((routePic) => {
      const [frontURL, endURL] = routePic.picURL.split("upload/");
      const picObj = {
        original: `${frontURL}upload/c_scale,w_${fullWidth}/${endURL}`,
        thumbnail: `${frontURL}upload/c_scale,w_${thumbWidth}/${endURL}`,
      };
      images.push(picObj);
      console.log(frontURL, endURL, picObj);
      setGalleryImages(images);
      return images;
    });
    console.log("images", images);
  }, [filteredPics]);


  return (
    <>
      <ImageGallery items={galleryImages} />
    </>
  );
};
