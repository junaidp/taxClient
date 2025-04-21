import React, { useState } from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import info from "../../assets/info.svg"
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import Tooltip from "../common/tooltip";

const Card = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const isButtonActive = selectedOption !== null;

  return (
    <div className="card-positioning-wrap">
      <Progress title="27% complete" width="27%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Select reporting period </h1>

          <div className="flex flex-row items-center gap-[8px] pointer">
            <p className="form-sub-title">
              Which period would you like to fill a tax return for.
            </p>
            <Tooltip text="The periods are provided directly by HMRC.  If you do not see a period listed it means that it is currently not due.  If you need to revise a previously submitted return click here.  If you do not see a period listed that you believe should be please contact the HMRC.">
              <img src={info} />
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col gap-[37px] mt-[68px]">
          {/* 2025 */}
          <div>
            <h1 className="jaldi text-[30px] text-[#003049] font-bold">2025</h1>
            <div className="flex flex-col gap-[16px]">
              {[
                { label: "Quarter 1", date: "April 5, 2025 - June 1, 2025", value: "2025-Q1", pastDue: true },
                { label: "Quarter 2", date: "April 5, 2025 - June 1, 2025", value: "2025-Q2" },
                { label: "Quarter 3", date: "April 5, 2025 - June 1, 2025", value: "2025-Q3" },
                { label: "Final Year End", date: "April 5, 2025 - June 1, 2025", value: "2025-FYE" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="border border-[1px] border-[#B7C0C5] rounded-[4px] h-[58px] flex items-center justify-between p-[14px]"
                >
                  <div className="flex items-center gap-[20px]">
                    <input
                      className="h-[20px] w-[20px]"
                      type="radio"
                      name="reportingPeriod"
                      value={item.value}
                      checked={selectedOption === item.value}
                      onChange={() => handleOptionChange(item.value)}
                    />
                    <p className="archivo text-[24px] text-[#5E7D8C] font-semibold">
                      <span className="font-bolder">{item.label} </span>
                    </p>
                    <p className="archivo text-[24px] text-[#5E7D8C]">{item.date}</p>
                  </div>
                  {item.pastDue && (
                    <p className="archivo text-[#D3984E] text-[24px]">Past due !</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2026 */}
          <div>
            <h1 className="jaldi text-[30px] text-[#003049] font-bold">2026</h1>
            <div className="flex flex-col gap-[16px]">
              <div className="border border-[1px] border-[#B7C0C5] rounded-[4px] h-[58px] flex items-center justify-between p-[14px]">
                <div className="flex items-center gap-[20px]">
                  <input
                    className="h-[20px] w-[20px]"
                    type="radio"
                    name="reportingPeriod"
                    value="2026-Q1"
                    checked={selectedOption === "2026-Q1"}
                    onChange={() => handleOptionChange("2026-Q1")}
                  />
                  <p className="archivo text-[24px] text-[#5E7D8C] font-semibold">
                    <span className="font-bolder">Quarter 1 </span>
                  </p>
                  <p className="archivo text-[24px] text-[#5E7D8C]">April 5, 2026 - June 1, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px]">
          <p className="jaldi text-[30px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
            If you need to revise a previously completed submission <span className="underline pointer">click here.</span>
          </p>

          <div className="card-button-wrap mt-40">
            <button
              className="back form-back-button"
              onClick={() => navigate("/confirm-detail")}
            >
              Back
            </button>

            <button
              className={`next-btn form-next-button ${isButtonActive ? "active-color" : "not-allowed"}`}
              disabled={!isButtonActive}
              onClick={() => {
                if (isButtonActive) navigate("/business-types");
              }}
              style={{ cursor: isButtonActive ? "pointer" : "not-allowed" }}
            >
              <p>Next</p>
              <img src={buttonArrow} alt="next" style={{ marginTop: "6px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
