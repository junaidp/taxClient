import React from "react";
import arrow from "../../assets/home/arrow.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.auth);
  const nino = sessionStorage.getItem("nino") || "";

  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div className="learn-more-btn">
          <p className="pointer">Learn more</p>
        </div>
        <div
          className={`free-btn ${!user?.username && "opacity-[.5]"} ${
            !user?.username && "cursor-not-allowed"
          }`}
          onClick={() => {
            if (nino) {
              navigate("/start");
            }
          }}
        >
          <p
            className={`${!user?.username ? "cursor-not-allowed" : "pointer"}`}
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
