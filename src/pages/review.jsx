import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/review/card";
import "./index.css";

const Review = () => {
  return (
    <div>
     
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card  />
    </div>
  );
};

export default Review;
