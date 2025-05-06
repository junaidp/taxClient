import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/confirm-details/card";
import { useSelector } from "react-redux";
import "./index.css";

const ConfirmDetails = () => {
  const { hmrc } = useSelector((state) => state?.tax);
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card hmrc={hmrc} />
    </div>
  );
};

export default ConfirmDetails;
