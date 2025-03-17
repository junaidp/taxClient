import React from "react";

import "../form/index.css";

const DeleteProfileDialog = ({ setShowDeleteAccount }) => {
  return (
    <div className="login-dialog-wrap">
      <h1 className="jaldi text-[40px] leading-[40px] text-[#003049]">
        Are you sure you want to delete your account?
      </h1>
      <h1 className="archivo text-[24px] leading-[26px] text-[#06263E87] mt-[4px]">
        Are you sure you want to delete your account?
      </h1>
      <div className="flex items-center gap-[16px] mt-[50px] justify-end">
        <button
          className="border border-[1px] rounded-[4px] border-[#B7C0C5] h-[50px] w-[162px] archivo text-[#5E7D8C] text-[20px] leading-[26px]"
          onClick={() => setShowDeleteAccount(false)}
        >
          Cancel
        </button>
        <button className="border border-[1px] pointer border-[#C88F47] rounded-[4px] rounded-[4px] w-[200px] h-[50px] w-[162px] archivo text-[#FFFFFF] text-[20px] bg-[#C88F47] leading-[26px]">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteProfileDialog;
