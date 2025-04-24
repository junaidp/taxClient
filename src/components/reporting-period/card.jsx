import React, { useState, useEffect } from "react";
import buttonArrow from "../../assets/arrow-right-button.png";
import info from "../../assets/info.svg";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import Tooltip from "../common/tooltip";
import moment from "moment";

const groupByYear = (details) => {
  const grouped = {};
  details.forEach(item => {
    const year = new Date(item.periodStartDate).getFullYear();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(item);
  });
  return grouped;
};

const Card = ({ obligation, loading }) => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(sessionStorage.getItem("reportingPeriod")) || null
  );

  useEffect(() => {
    sessionStorage.setItem("reportingPeriod", JSON.stringify(selectedOption));
  }, [selectedOption]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const isButtonActive = selectedOption !== null;

  const allObligations = obligation.flatMap(item => item.obligationDetails);

  const groupedByYear = groupByYear(allObligations);

  return (
    <div className="card-positioning-wrap">
      <Progress title="27% complete" width="27%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Select reporting period</h1>
          <div className="flex flex-row items-center gap-[8px] pointer">
            <p className="form-sub-title">
              Which period would you like to fill a tax return for.
            </p>
            <Tooltip text="The periods are provided directly by HMRC. If you do not see a period listed it means that it is currently not due. If you need to revise a previously submitted return click here. If you do not see a period listed that you believe should be please contact the HMRC.">
              <img src={info} />
            </Tooltip>
          </div>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          <div className="flex flex-col gap-[37px] mt-[68px]">
            {
              loading && <p className="form-sub-title">Loading...</p>
            }
            {Object.entries(groupedByYear).map(([year, items]) => (
              <div key={year}>
                <h1 className="jaldi text-[30px] text-[#003049] font-bold">{year}</h1>
                <div className="flex flex-col gap-[16px]">
                  {items.map((singleItem, index) => (
                    <div
                      key={singleItem.periodStartDate + singleItem.periodEndDate}
                      className="border border-[1px] border-[#B7C0C5] rounded-[4px] h-[58px] flex items-center justify-between p-[14px]"
                    >
                      <div className="flex items-center gap-[20px]">
                        <input
                          className="h-[20px] w-[20px]"
                          type="radio"
                          name="reportingPeriod"
                          checked={selectedOption?.periodStartDate === singleItem.periodStartDate &&
                            selectedOption?.periodEndDate === singleItem.periodEndDate}
                          onChange={() => handleOptionChange(singleItem)}
                        />
                        <p className="archivo text-[24px] text-[#5E7D8C] font-semibold">
                          <span className="font-bolder">Quarter {index + 1}</span>
                        </p>
                        <p className="archivo text-[24px] text-[#5E7D8C]">
                          {moment(singleItem.periodStartDate).format('MMMM D, YYYY')} - {moment(singleItem.periodEndDate).format('MMMM D, YYYY')}
                        </p>
                      </div>
                      {singleItem.dueDate && (
                        <p
                          className={`archivo text-[24px] ${moment(singleItem.dueDate).isBefore(moment(), 'day')
                            ? 'text-[#D3984E]'
                            : 'text-[#65B344]'
                            }`}
                        >
                          {moment(singleItem.dueDate).isBefore(moment(), 'day')
                            ? 'Past due !'
                            : `due ${moment(singleItem.dueDate).format('DD-MM-YYYY')}`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px]">
            <p className="jaldi text-[30px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
              If you need to revise a previously completed submission{" "}
              <span className="underline pointer">click here.</span>
            </p>

          </div>
        </div>
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
  );
};

export default Card;
