import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/checkout/card";
import { useSelector } from "react-redux";
import "./index.css";

const CheckOut = ({setShowLoginDialog,showLoginDialog}) => {
  const { user } = useSelector((state) => state?.auth)
  return (
    <div className="cards-wrapper">
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card user={user} setShowLoginDialog={setShowLoginDialog} showLoginDialog={showLoginDialog} />

    </div>
  );
};

export default CheckOut;
