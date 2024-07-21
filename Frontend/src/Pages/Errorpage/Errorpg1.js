import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// style
import "../../components/Css/sass/Errorpg1.scss";

function Errorpg1() {
  return (
    <div className="full-content">
      <p
        className="error-status mb-0"
        style={{ fontSize: "150px", color: "#000000d6", fontFamily: "fantasy" }}
      >
        4<img src="/images/404emoji.png" width={"120px"} />4
      </p>
      <h1 className="error-content">
        <span className="errorcontent-title">OOPS !</span> PAGE NOT BE FOUND
      </h1>
      <h5 className="error-subcontent">
        Sorry but the page your looking for does not exit, have been
        <br />
        removed. name changed or is temporarily unavailable
      </h5>
      <br />
      <a href="/">
        <button className="buttons">Go To HomePage</button>
      </a>
    </div>
  );
}

export default Errorpg1;
