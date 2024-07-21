import React from "react";
import image from "../Images/lord-4045702.jpg";
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-im img-fluid"
            src={image}
            alt="Card"
            // height={500}
            style={{ height: "80vh" }}
          />
          <div
            className="card-img-overlay d-flex justify-content-end align-items-center"
            style={{ left: "auto", width: "50%" }}
          >
            <div className="container">
              <h5
                className="card-tile fs-1 text fw-lighter"
                style={{ color: "white" }}
              >
                New Season Arrivals
              </h5>
              <p className="card-tet fs-5 mt-2 d-none d-sm-block ">
                Explore our latest arrivals of sacred items and spiritual
                essentials, each crafted to enrich your temple visits with
                divine grace and timeless traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
