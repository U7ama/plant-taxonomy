import React from "react";
//import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img height="250" src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Here Some Species Information will be Shown.
            </p>
            <NavLink to="/identify" className="btn btn-success">
              Details 
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
