import React from "react";

import "../form/index.css";
import { useNavigate } from "react-router-dom";

const SubmitDialog = ({ setShowSubmitDialog }) => {
  const navigate = useNavigate()
  return (
    <div className="login-dialog-wrap">
      <h1 className="jaldi text-[40px] leading-[40px] text-[#003049] font-bold">
        Email address submitted!{" "}
      </h1>
      <h1 className="archivo text-[24px] leading-[26px] text-[#06263E87] mt-[12px] leading-[35px]">
        You have been successfully added to the email notification list. We will
        notify you as soon as the software is ready to submit Corporation Taxes.{" "}
      </h1>
      <div className="flex items-center gap-[16px] mt-[50px] justify-between">
        <button
          className="border border-[1px] border-[#B7C0C5] rounded-[4px] h-[50px] w-[162px] archivo text-[#5E7D8C] text-[16px] leading-[26px] text-[24px]"
          onClick={() => setShowSubmitDialog(false)}
        >
          Back
        </button>
        <button className="border  border-[1px] pointer rounded-[4px] border-[#003049] h-[50px] w-[250px] archivo text-[#FFFFFF] text-[16px] bg-[#003049] leading-[26px] text-[24px]" onClick={() => navigate("/start")}>
          Return to Home Page{" "}
        </button>
      </div>
    </div>
  );
};

export default SubmitDialog;
