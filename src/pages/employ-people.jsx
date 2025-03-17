import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/employ-people/card";
import "./index.css";

const EmployPeople = () => {
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

export default EmployPeople;
