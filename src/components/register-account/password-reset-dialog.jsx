import React from "react";

import "../form/index.css";

const PasswordResetDialog = ({
  setPasswordResetDialog,
  setNewPasswordDialog,
}) => {
  return (
    <div className="login-dialog-wrap">
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Password reset</h1>
          <p className="form-sub-title">
            Enter the code emailed to tyrion@sevenkingdoms.com
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
            onClick={() => setNewPasswordDialog(true)}
          >
            <p>Verify</p>
          </div>
          <div
            className="go-back-btn pointer"
            onClick={() => setPasswordResetDialog(false)}
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

export default PasswordResetDialog;
