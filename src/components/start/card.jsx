import React from "react";
import buttonArrow from "../../assets/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import Tooltip from "../common/tooltip";

const Card = ({ selectedOption, setSelectedOption }) => {
  const navigate = useNavigate();
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  React.useEffect(() => {
    sessionStorage.setItem("selectedOption", selectedOption)
  }, [selectedOption])

  return (
    <div className="card-positioning-wrap">
      <Progress title="0% complete" width="2%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title font-bold">Let’s Begin!</h1>
          <p className="form-sub-title">
            What type of return would you like to complete?
          </p>
          <div className="initial-card-content-wrap">
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                value="Individual"
                checked={selectedOption === "Individual"}
                onChange={handleRadioChange}
              />
              <div className="content">
                <h1>Individual (Self-Assessment)</h1>
                <p>
                  Select this option if you do not have a company and you are
                  filing under your own Unique Tax Reference Number (UTR).
                </p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                value="Corporation"
                checked={selectedOption === "Corporation"}
                onChange={handleRadioChange}
              />
              <div className="content">
                <h1>Corporation</h1>
                <p>
                  Select this option if you are filing under your company number
                  that you have registered with the HMRC.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <Tooltip text={!selectedOption && "please select one of the options listed above"}>
            <button
              className={`next-btn  ${selectedOption && "form-next-button active-color text-[24px]"
                }`}
              style={{ cursor: selectedOption ? "pointer" : "not-allowed" }}
              onClick={() =>
                selectedOption &&
                navigate(
                  selectedOption === "Corporation"
                    ? "/corporation-taxes"
                    : "/access-detail"
                )
              }
            >
              <p>Next</p>
              <img src={buttonArrow} className="w-[24px] h-[24px] mt-[6px]" style={{ marginTop: "6px" }} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Card;
