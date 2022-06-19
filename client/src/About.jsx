import React from "react";
import plant from "../src/images/plant.svg";
import hand from "../src/images/hand.svg";
import desc from "../src/images/description.svg";
//import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
    <div  style={{ position: "absolute", top: "185px", left: "130px"}}>
    <strong>
    <p style={{fontFamily: "inherit", fontSize: "18px"}}>Our web app will technologically advanced, comprehensive, <br /> and  accurate plant
      identification app that will give a person  <br /> anywhere on Earth a new  way to explore the
      natural world  <br /> in their everyday life. Mostly we need  Botanists to identify  <br /> plants species and
      in the village farmer cannot identify <br /> the unwanted plants. Plant identification books are  <br />
      often  narrow in scope, expensive, and cumbersome. <br /> They are not meant to be kept in your
      pocket for  <br /> quick access when you're out in nature.</p>
      </strong>
    </div>
      <Commom
        name="Welcome to About page"
          imgsrc={plant}
          imgsrc1={hand}
          imgsrc2={desc}
          visit="/"
          btname="<--"
      />
    </>
);
};

export default About;

