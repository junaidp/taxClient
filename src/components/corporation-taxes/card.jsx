import React from "react";
import lightTick from "../../assets/light-tick.svg";
import dimTick from "../../assets/dim-tick.svg";
import { useNavigate } from "react-router-dom";

const Card = ({ setShowSubmitDialog }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setError(isValid ? "" : "Please enter a valid email address");
  };

  function handleSubmit() {
    if (email && !error) {
      setShowSubmitDialog(true);
    }
  }

  return (
    <div className="card-positioning-wrap">
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Corporation Taxes</h1>
          <p className="form-sub-title">
            TaxReady.co.uk does not currently support corporation tax filing.
            However, we are actively working on adding this feature, and it will
            be available soon.
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            Please enter your email below to be notified when we start
            supporting corporate tax filing.
          </p>
        </div>
        <div className="form-input-wrap">
          <label>Your email address</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {error && (
            <p className="error-text jaldi text-[#D3984E] text-[26px] leading-[36px]">
              {error}
            </p>
          )}
        </div>
        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/start")}
          >
            Back
          </button>
          <button
            className={`next-btn  flex items-center gap-[7px] ${
              email && !error ? "active-color form-next-button" : ""
            }`}
            style={{ cursor: email && !error ? "pointer" : "not-allowed" }}
            disabled={!!error}
            onClick={handleSubmit}
          >
            <p>Submit</p>
            {error ? <img src={lightTick} /> : <img src={dimTick} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
