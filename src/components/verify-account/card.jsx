import React from "react";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="card-positioning-wrap">
      <Progress title="82% complete" width="82%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Verify your account</h1>
          <p className="form-sub-title">
            You have been sent a verification code to hils.hawkins@gmail.com.
            Please enter the code below. If you have not received, check your
            spam folder.
          </p>
        </div>

        <div className="otp-form-wrap">
          <div className="otp-input-wrap">
            <input />
            <input />
            <input />
            <input />
            <input />
          </div>
          <p className="remaining-time">1:30</p>

          <div
            className="verify-btn pointer"
            onClick={() => navigate("/submit")}
          >
            <p>Verify</p>
          </div>
          <div
            className="go-back-btn pointer"
            onClick={() => navigate("/register-account")}
          >
            <p>Go Back</p>
          </div>
          <div className="resend-code-btn">
            <p>Resend code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
