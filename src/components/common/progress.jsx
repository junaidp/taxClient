import React from "react";

const Progress = ({ title, width }) => {
  return (
    <div className="mb-[12px]">
      <h1 className="jaldi text-[20px] leading-[34px] text-[#FFFFFF]">
        {title}
      </h1>
      <div className="relative bg-[#C5D1E1] border border-[1px] border-[#90ABBA] w-[100%] h-[12px] rounded-[10px]">
        <div
        style={{width:width}}
          className={`absolute left-[0px] top-[0px] bottom-[0px] bg-[#0052B4] w-[${width}] h-[12px] rounded-[10px]`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
