import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/corporation-taxes/card";
import SubmitDialog from "../components/corporation-taxes/submit-dialog";
import "./index.css";

const CorporationTaxes = () => {
  const [showSubmitDialog, setShowSubmitDialog] = React.useState(false);
  return (
    <div>
      {showSubmitDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] bottom-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap" style={{marginTop:"12%"}}>
            <SubmitDialog setShowSubmitDialog={setShowSubmitDialog} />
          </div>
        </div>
      )}
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card setShowSubmitDialog={setShowSubmitDialog} />
    </div>
  );
};

export default CorporationTaxes;
