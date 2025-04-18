import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import select from "../../assets/business-select.svg"
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = ({ selectedBusinessTypes, setSelectedBusinessTypes, services }) => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBusinessTypes((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((item) => item !== value)
    );
  };

  React.useEffect(() => {
    if (selectedBusinessTypes?.length) {
      sessionStorage.setItem("selectedBusinessTypes", JSON.stringify(selectedBusinessTypes))
    }
    else {
      sessionStorage.setItem("selectedBusinessTypes", JSON.stringify([]))
    }

  }, [selectedBusinessTypes])

  return (
    <div className="card-positioning-wrap">
      <Progress title="32% complete" width="32%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Select business types</h1>
          <p className="form-sub-title">
            To assist in identifying the most common business expenses you may incur, please select the type of business(s) you operate.
          </p>
        </div>

        <div className="business-type-search-wrap">
          <div className="business-type-input-wrap">
            <img src={search} />
            <div className="relative">
              <input placeholder="search..." className="text-[24px]" />
              <img src={select} className="absolute top-[10px]" />
            </div>
          </div>
        </div>
        <div className="business-check-items-wrap max-h-[500px] overflow-y-auto">

          {
            services?.map((item, ind) => {
              return <div className="single-check-item" key={ind}>
                <input
                  type="checkbox"
                  checked={selectedBusinessTypes.includes(item?.name)}
                  onChange={handleCheckboxChange}
                  value={item?.name}
                />
                <p>{item?.name}</p>
              </div>
            })
          }
        </div>
        <div className="mt-40">
          {
            !selectedBusinessTypes?.length ?
            <p className="archivo text-[16px] text-end mb-[14px]" style={{ color: "rgba(211, 152, 78, 1)" }}>Please enter at least total income before continuing.</p>:null
          }
          <div className="card-button-wrap">
            <button
              className="back form-back-button"
              onClick={() => navigate("/reporting-period")}
            >
              Back
            </button>
            <button
              className={`next-btn ${selectedBusinessTypes.length && "active-color form-next-button"
                }`}
              onClick={() => {
                if (selectedBusinessTypes?.length) {
                  navigate("/employ-people");
                }
              }}
              style={{
                cursor: selectedBusinessTypes?.length ? "pointer" : "not-allowed",
              }}
            >
              <p>Next</p>
              <img src={buttonArrow} style={{ marginTop: "6px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
