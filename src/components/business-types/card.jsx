import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
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
      <Progress title="36% complete" width="36%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Select business types</h1>
          <p className="form-sub-title">
            To assist in identifying the most common business expenses you may
            incur, please select all the types of services you provide.
          </p>
        </div>

        <div className="business-type-search-wrap">
          <div className="business-type-input-wrap">
            <img src={search} />
            <input placeholder="search..." />
          </div>
        </div>
        <div className="business-check-items-wrap">

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



        <div className="card-button-wrap mt-40">
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
            <img src={buttonArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
