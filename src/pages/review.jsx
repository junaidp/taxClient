import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/review/card";
import ResponseDialog from "../components/review/response-dialog";
import "./index.css";

const Review = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {open && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap" style={{ width: "80%" }}>
            <ResponseDialog setOpen={setOpen} />
          </div>
        </div>
      )}
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card setOpen={setOpen} />
    </div>
  );
};

export default Review;
