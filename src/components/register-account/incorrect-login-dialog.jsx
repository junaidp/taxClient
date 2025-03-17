import React from "react";

import "../form/index.css";

const IncorrectLoginDialog = ({ setInCorrectLoginDialog }) => {
  return (
    <div className="login-dialog-wrap">
      <h1 className="jaldi text-[40px] leading-[40px] text-[#003049]">
        Incorrect login{" "}
      </h1>
      <h1 className="archivo text-[24px] leading-[26px] text-[#06263E87] mt-[4px]">
        You have entered an incorrect email and/or password. Please try again.{" "}
      </h1>
      <div className="flex items-center gap-[16px] mt-[50px] justify-start">
        <button
          className="border border-[1px] rounded-[4px] border-[#003049] h-[50px] w-[162px] archivo text-[#FFFFFF] text-[20px] leading-[26px] bg-[#003049]"
          onClick={() => setInCorrectLoginDialog(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default IncorrectLoginDialog;
