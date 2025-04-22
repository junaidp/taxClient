import React, { useState } from "react";
import buttonArrow from "../../assets/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import info from '../../assets/info.svg'
import Tooltip from "../../components/common/tooltip"

const Card = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(sessionStorage.getItem("employPeople") || "");
  let selectedBusinessTypes = JSON.parse(sessionStorage.getItem("selectedBusinessTypes"));

  React.useEffect(() => {
    sessionStorage.setItem("employPeople", selected)
  }, [selected])

  return (
    <div className="card-positioning-wrap">
      <Progress title="45% complete" width="45%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Did you employ people during this period?</h1>
          <div className="flex">
            <p className="form-sub-title">
              Select ‘yes’ if you had employee’s working for your <span className="font-bold"> Delivery Driver </span>service during the period of April 5, 2025 - June 1, 2025.
              <span className="inline-flex items-center">
                <Tooltip text="Indicate whether you paid any employees during the specified period. Your response will help us customize your expense worksheet on the next screen.">
                  <img src={info} alt="info" className="ml-1 w-4 h-4 inline" />
                </Tooltip>
              </span>
            </p>
          </div>
          <div className="initial-card-content-wrap">
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                name="employ"
                value="no"
                checked={selected === "no"}
                onChange={() => setSelected("no")}
              />
              <div className="content">
                <h1>No</h1>
                <p>No you do not currently employ people</p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                name="employ"
                value="yes"
                checked={selected === "yes"}
                onChange={() => setSelected("yes")}
              />
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
            onClick={() => selectedBusinessTypes.length > 1 ? navigate("/information-window") : navigate("/business-types")}
          >
            Back
          </button>
          <Tooltip text={!selected && "Please select one of the options above in order to continue"}>
            <button
              className={`next-btn  ${selected && "form-next-button active-color text-[24px]"
                }`} onClick={() => selected && navigate("/expenses")}
              style={{ cursor: selected ? "pointer" : 'not-allowed' }}
            >
              <p>Next</p>
              <img src={buttonArrow} style={{ marginTop: "6px" }} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Card;
