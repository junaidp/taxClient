import React from "react";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate=useNavigate()
  return (
    <div className="failure-container">
      <div className="failure-box">
        <div className="icon">&#10060;</div>
        <h1>Payment Failed!</h1>
        <p>Oops! Something went wrong with your payment. Please try again.</p>
        <button
          className="buton"
          onClick={() => navigate("/checkout")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Failure;
