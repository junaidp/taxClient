import React from "react";

import "../form/index.css";

const ForgotPasswordDialog = ({
  setShowForgotPasswordDialog,
  setPasswordResetDialog,
}) => {
  return (
    <div className="login-dialog-wrap">
      <h1 className="jaldi text-[40px] leading-[40px] text-[#003049]">
        Forgot password{" "}
      </h1>
      <h1 className="archivo text-[24px] leading-[26px] text-[#06263E87] mt-[4px]">
        Please enter the email address your account is registered with and we
        will send you reset instructions.{" "}
      </h1>
      <div className="mt-[50px] flex flex-col gap-[37px]">
        <div className="flex flex-col gap-[9px]">
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">
            Email
          </p>
          <input
            className="h-[60px] px-[21px] py-[16px] rounded-[8px] border border-[1px] border-[#C4C4C4] archivo text-[#06263EA3]"
            placeholder="tyrionlannister@sevenkingdoms.com"
          />
        </div>
        <button
          className="h-[60px] rounded-[4px] bg-[#003049] archivo font-bold text-[24px] leading-[26px] text-[#FFFFFF]"
          onClick={() => setPasswordResetDialog(true)}
        >
          Reset Password
        </button>
        <button
          className="h-[60px] rounded-[4px] border border-[1px] border-[#B7C0C5] archivo font-bold text-[24px] leading-[26px] text-[#5E7D8C]"
          onClick={() => setShowForgotPasswordDialog(false)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordDialog;
