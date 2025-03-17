import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/business-types/card";
import "./index.css";

const BusinessTypes = ({ selectedBusinessTypes, setSelectedBusinessTypes }) => {
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card
        selectedBusinessTypes={selectedBusinessTypes}
        setSelectedBusinessTypes={setSelectedBusinessTypes}
      />
    </div>
  );
};

export default BusinessTypes;
