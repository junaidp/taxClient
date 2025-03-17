import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = ({ selectedBusinessTypes, setSelectedBusinessTypes }) => {
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
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Artist"
              checked={selectedBusinessTypes.includes("Artist")}
              onChange={handleCheckboxChange}
            />
            <p>Artist</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Beauty and personal care technician"
              checked={selectedBusinessTypes.includes(
                "Beauty and personal care technician"
              )}
              onChange={handleCheckboxChange}
            />
            <p>Beauty and personal care technician</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Childcare provider"
              checked={selectedBusinessTypes.includes("Childcare provider")}
              onChange={handleCheckboxChange}
            />
            <p>Childcare provider</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Creative professional"
              checked={selectedBusinessTypes.includes("Creative professional")}
              onChange={handleCheckboxChange}
            />
            <p>Creative professional</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Delivery driver"
              checked={selectedBusinessTypes.includes("Delivery driver")}
              onChange={handleCheckboxChange}
            />
            <p>Delivery driver</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="E-commerce and online seller"
              checked={selectedBusinessTypes.includes(
                "E-commerce and online seller"
              )}
              onChange={handleCheckboxChange}
            />
            <p>E-commerce and online seller</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Entertainer"
              checked={selectedBusinessTypes.includes("Entertainer")}
              onChange={handleCheckboxChange}
            />
            <p>Entertainer</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Farmers and agricultural"
              checked={selectedBusinessTypes.includes(
                "Farmers and agricultural"
              )}
              onChange={handleCheckboxChange}
            />
            <p>Farmers and agricultural</p>
          </div>
          <div className="single-check-item">
            <input
              type="checkbox"
              value="Freelance/ Consultant"
              checked={selectedBusinessTypes.includes("Freelance/ Consultant")}
              onChange={handleCheckboxChange}
            />
            <p>Freelance/ Consultant</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/reporting-period")}
          >
            Back
          </button>
          <button
            className={`next-btn ${
              selectedBusinessTypes.length && "active-color form-next-button"
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
