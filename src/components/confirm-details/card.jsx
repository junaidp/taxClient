import React from "react";
import buttonArrow from "../../assets/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = ({ hmrc }) => {
  const navigate = useNavigate();
  return (
    <div className="card-positioning-wrap">
      <Progress title="18% complete" width="18%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Confirm details</h1>
          <p className="form-sub-title">
            Are the details listed below correct? If not, please click the back
            button and try logging in again, or contact the <span className="underline pointer" onClick={() => window.open("https://www.gov.uk/contact-hmrc", "_blank")} style={{ fontWeight: "100" }}>HMRC.</span>
          </p>
        </div>

        <div className="form-collected-data">
          <div className="single-collected-data">
            <h1>Individual name</h1>
            <p style={{ color: "rgba(6, 38, 62, 0.64)", marginLeft: "30px" }}>Jamie Lannister</p>
          </div>
          <div className="single-collected-data">
            <h1>Date of Birth</h1>
            <p>04-02-1980</p>
          </div>
          <div className="single-collected-data">
            <h1>Unique Tax Payer Reference (UTR)</h1>
            <p>12345678</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => navigate("/insurance-number")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/reporting-period")}
          >
            <p>Next</p>
            <img src={buttonArrow} style={{ marginTop: "6px" }} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
