import React from "react";
import buttonArrow from "../../assets/arrow-right-button.png";
import Progress from "../common/progress";
import line from "../../assets/line.svg";
import down from "../../assets/down.svg";
import action from "../../assets/action.png";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../../components/common/pdf"
import LandLordPDF from "../../components/common/landlord-pdf"
import { useSelector } from "react-redux";

const Card = () => {
  const navigate = useNavigate();
  const { hmrc } = useSelector((state) => state.tax);
  const filteredItems = JSON.parse(sessionStorage.getItem("filteredItems"))
  const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));
  let totalIncome = 0;
  filteredItems?.forEach((element) => {
    totalIncome += Number(element.totalIncome);
  });

  let totalExpenses = 0;
  filteredItems?.forEach((element) => {
    element?.expenses?.forEach((expense) => {
      totalExpenses += Number(expense.value);
    });
  });

  const netEarning = totalIncome - totalExpenses


  function isLandLordPdf() {
    let isLandLord = false
    filteredItems.forEach((business) => {
      if (
        business.name === "Landlord (Foreign Property)" || business.name === "Landlord (Furnished Holiday Lettings) UK and EEA" || business.name === "Landlord (UK Property)") {
        isLandLord = true
      }
      else {
        isLandLord = false
      }
    })
    return isLandLord
  }

  return (
    <div className="card-positioning-wrap">
      <Progress title="91% complete" width="91%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Submit to the HMRC</h1>
          <p className="form-sub-title">
            You have now completed your tax return, please review by clicking
            the download link below.
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            If you are satisfied, click the ‘Submit to HMRC’ button below. Or to
            make revisions, you can go back and make any necessary changes.{" "}
          </p>
        </div>

        <div className="my-[50px] flex gap-[14px] items-center justify-center">
          <div
            className="w-[105px] h-[105px] bg-[#003049] relative"
            style={{ borderRadius: "50%" }}
          >
            <img src={line} className="absolute top-[20px] left-[48px]" />
            <img src={down} className="absolute bottom-[30px] left-[25px]" />
          </div>
          <PDFDownloadLink
            document={
              isLandLordPdf() ? <LandLordPDF hmrc={hmrc} filteredItems={filteredItems} netEarning={netEarning.toString()} reportingPeriod={reportingPeriod} /> : <PDF hmrc={hmrc} filteredItems={filteredItems} netEarning={netEarning.toString()} reportingPeriod={reportingPeriod} />
            }
          >
            <p className="jaldi text-[30px] leading-[50px] text-[#003049]">Click here to download</p>
          </PDFDownloadLink>

        </div>

        <div className="bg-[#F8FAFB] rounded-[8px] py-[39px] px-[22px] flex items-center gap-[21px]">
          <img src={action} />
          <div className="flex flex-col gap-[10px]">
            <p className="jaldi text-[30px] leading-[50px] text-[#1E1E1E]">
              Remember you owe £8,653.00 in corporation taxes to the HMRC, they
              are{" "}
            </p>
            <p className="jaldi text-[30px] leading-[50px] text-[#1E1E1E]">
              due by August 30, 2024. You can pay at at the{" "}
              <span
                className="underline pointer"
                onClick={() =>
                  window.open(
                    "https://www.gov.uk/pay-corporation-tax",
                    "_blank"
                  )
                }
              >
                HMRC payment portal
              </span>
            </p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/checkout")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            style={{ width: "200px" }}
            onClick={() => navigate("/finished")}
          >
            <p>Submit to HMRC</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
