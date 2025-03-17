import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card-positioning-wrap">
      <Progress title="45% complete" width="45%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Do you employ people?</h1>
          <p className="form-sub-title">
            Select yes if you have employee’s working under the sole trader
            company.{" "}
          </p>
          <div className="initial-card-content-wrap">
            <div className="initial-card-checkbox-wrap">
              <input type="radio" />
              <div className="content">
                <h1>No</h1>
                <p>No you do not currently employ people</p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input type="radio" />
              <div className="content">
                <h1>Yes</h1>
                <p>Yes you currently employ people.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/business-types")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/expenses")}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
