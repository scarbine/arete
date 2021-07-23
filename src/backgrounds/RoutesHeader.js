import React from "react";
import './backgrounds.css'

export const RoutesHeaderImage = () => {
  return (
    <div>
      <section className="route_list">
        <div className="route_header">
          <img
            src="https://res.cloudinary.com/ddaeunjfu/image/upload/c_crop,g_north,h_639,w_1876/v1627005099/Arete/Backgrounds/climber.6_xjnu4i.jpg"
            alt="mountain landscape"
            className="routes_img"
          />
          <h1 className="routes_title">Routes</h1>
        </div>
      </section>
    </div>
  );
};