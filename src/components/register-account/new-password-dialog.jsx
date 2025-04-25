import React from "react";

import "../form/index.css";

import showPassword from "../../assets/eye-password-show.svg"
import hidePassword from "../../assets/eye-password-hide.svg"

const NewPasswordDialog = ({ setNewPasswordDialog }) => {
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = React.useState(false)

  return (
    <div className="login-dialog-wrap">
      <h1 className="jaldi text-[40px] leading-[40px] text-[#003049] font-bold">
        Set a new password{" "}
      </h1>
      <h1 className="archivo text-[24px] leading-[26px] text-[#06263E87] mt-[20px]">
        Enter the code emailed to{" "}
        <span className="text-[#FFFFF] font-bold">
          tyrion@sevenkingdoms.com
        </span>
      </h1>
      <div className="mt-[50px] flex flex-col gap-[37px]">
        <div className="flex flex-col gap-[9px] relative">
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">
            Password
          </p>
          <input
            className="h-[60px] px-[21px] py-[16px] rounded-[8px] border border-[1px] border-[#C4C4C4] archivo text-[#06263EA3]"
            placeholder="* * * * * * * * * *"
            type={showNewPassword ? "text" : "password"}

          />
          <img src={showNewPassword ? showPassword : hidePassword} onClick={() => setShowNewPassword((pre) => !pre)} className="h-[32px] w-[32px] absolute top-[45px] right-[10px] pointer" />
        </div>
        <div className="flex flex-col gap-[9px] relative">
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">
            Confirm password
          </p>
          <input
            className="h-[60px] px-[21px] py-[16px] rounded-[8px] border border-[1px] border-[#C4C4C4] archivo text-[#06263EA3]"
            placeholder="* * * * * * * * * *"
            type={showConfirmNewPassword ? "text" : "password"}
          />
          <img src={showConfirmNewPassword ? showPassword : hidePassword} onClick={() => setShowConfirmNewPassword((pre) => !pre)} className="h-[32px] w-[32px] absolute top-[45px] right-[10px] pointer" />
        </div>
        <button className="h-[60px] rounded-[4px] bg-[#003049] archivo font-bold text-[24px] leading-[26px] text-[#FFFFFF]">
          Reset Password
        </button>
        <button
          className="h-[60px] rounded-[4px] border border-[1px] border-[#B7C0C5] archivo font-bold text-[24px] leading-[26px] text-[#5E7D8C]"
          onClick={() => setNewPasswordDialog(false)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NewPasswordDialog;
