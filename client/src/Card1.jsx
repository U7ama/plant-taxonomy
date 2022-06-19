import React from "react";
//import web from "../src/images/s1.jpg";
//import { NavLink } from "react-router-dom";
const Card1 = (props) => {
    return (
      <>
        <div className="col-md-4 col-12 mx-auto">
          <div className="card">
            <img height="150" src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          </div>
        </div>
      </>
    );
  };
  export default Card1;