import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/start/card";
import "./index.css";

const Start = ({ selectedOption, setSelectedOption }) => {
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default Start;
