import React from "react";
import { NavLink } from "react-router-dom";


const Commom = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>
                {props.name}<br />
              </h1>
              <h2 className="my-3">
                Upload Images and Check Species of Plant
              </h2>
              <div className="container">
                <div className="row" >
                  <div className="col-lg-5" >
                  </div>
                  <div className="col-lg-3 ml-5" >
                    <img
                      src={props.imgsrc1}
                      className="d-none ml-5 d-lg-block  img-fluid animated"
                      alt="Commom img"
                    />
                  </div>
                  <div className="col-lg-2" >
                    <img
                      src={props.imgsrc}
                      className="mt-5 d-none d-lg-block  img-fluid animated"
                      alt="Commom img"
                    />
                  </div>
                  <div className="col-lg-2" >
                    <img
                      src={props.imgsrc2}
                      className="d-none mt-5  d-lg-block img-fluid animated"
                      alt="Commom img"
                    />
                  </div>
                  <div className="col-lg-2 mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
