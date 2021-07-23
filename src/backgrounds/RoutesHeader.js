import React from "react";
import './backgrounds.css'

export const RoutesHeaderImage = () => {
  return (
    <div>
      <section className="route_list">
        <div className="route_header">
          <img
            src="https://res.cloudinary.com/ddaeunjfu/image/upload/c_crop,g_north,h_491,w_1200/v1627066555/Arete/Backgrounds/backgrounds9_ho1kw2.jpg"
            alt="mountain landscape"
            className="routes_img"
          />
          <h1 className="routes_title">Routes</h1>
        </div>
      </section>
    </div>
  );
};