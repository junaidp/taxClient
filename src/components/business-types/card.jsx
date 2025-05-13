import React from "react";
import buttonArrow from "../../assets/arrow-right-button.png";
import cross from "../../assets/business-type-close.svg";
import select from "../../assets/search.svg";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import { getServices } from "../../config/helpers"

const SelectedItem = ({ name, onRemove }) => {
  return (
    <div className="flex items-center gap-[6px] archivo rounded-[4px] px-[8px] py-[3px] border border-[#C4C4C4]">
      <p className="text-sm archivo text-[#757E82]">{name}</p>
      <img
        src={cross}
        className="w-[14px] h-[14px] cursor-pointer"
        onClick={onRemove}
      />
    </div>
  );
};

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

  React.useEffect(() => {
    if (selectedBusinessTypes?.length) {
      sessionStorage.setItem("selectedBusinessTypes", JSON.stringify(selectedBusinessTypes));
    } else {
      sessionStorage.setItem("selectedBusinessTypes", JSON.stringify([]));
    }
  }, [selectedBusinessTypes]);

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

        <div className="business-type-search-wrap mt-4">
          <div className="flex items-center flex-wrap gap-2 border border-gray-300 rounded-md p-2 min-h-[50px]">
            {selectedBusinessTypes.map((name) => (
              <SelectedItem
                key={name}
                name={name}
                onRemove={() =>
                  setSelectedBusinessTypes((prev) =>
                    prev.filter((item) => item !== name)
                  )
                }
              />
            ))}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-base focus:outline-none min-w-[150px]"
            />
          </div>
        </div>

        <div className="business-check-items-wrap max-h-[300px] shrink-0 overflow-y-auto">
          {getServices()
            ?.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, ind) => {
              return (
                <div className="single-check-item" key={ind}>
                  <input
                    type="checkbox"
                    checked={selectedBusinessTypes.includes(item?.name)}
                    onChange={handleCheckboxChange}
                    value={item?.name}
                  />
                  <p>{item?.name}</p>
                </div>
              );
            })}
        </div>

        {!selectedBusinessTypes?.length ? (
          <p className="archivo text-[16px] text-end mb-[14px]" style={{ color: "rgba(211, 152, 78, 1)" }}>
            Please select at least one service before continuing.
          </p>
        ) : null}
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
                if (selectedBusinessTypes?.length > 1) {
                  navigate("/information-window");
                }
                else {
                  if (selectedBusinessTypes?.length === 1) {
                    navigate("/employ-people");
                  }
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
  );
};

export default Card;
