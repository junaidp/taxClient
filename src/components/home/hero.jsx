import React from "react";
import arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div className="learn-more-btn pointer" onClick={()=>navigate("/about")}>
          <p className="pointer">Learn more</p>
        </div>
        <div
          className={`free-btn`}
          onClick={() => {
            navigate("/start");

          }}
        >
          <p
            className={`pointer`}
          >
            Start for free
          </p>
          <div>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
