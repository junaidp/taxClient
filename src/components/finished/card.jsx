import React from "react";
import Progress from "../common/progress";
import line from "../../assets/line.svg";
import down from "../../assets/down.svg";
import action from "../../assets/action.png";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../common/pdf";
import LandLordPDF from "../../components/common/landlord-pdf"
import { useSelector } from "react-redux";

const Card = () => {
  const navigate = useNavigate();
  const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));
  const { hmrc } = useSelector((state) => state.tax);
  const filteredItems = JSON.parse(sessionStorage.getItem("filteredItems"))
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
      <Progress title="100% complete" width="100%" />
      <div className="main-card-wrap">
        <div className="flex flex-col gap-[18px] text-center">
          <h1 className="jaldi text-[50px] leading-[85px] text-[#003049] font-bold">
            You’re Finished!{" "}
          </h1>
          <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
            Your return for period
          </p>
          <div>
            <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
              {moment(reportingPeriod?.periodStartDate).format('MMMM D, YYYY')} - {moment(reportingPeriod?.periodEndDate).format('MMMM D, YYYY')}.
            </p>
            <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
              has successfully been submitted to the the HMRC
            </p>
          </div>
          <p className="jaldi text-[26px] leading-[44px] text-[#003049]">
            Confirmation code 2QWE-4067534A
          </p>
        </div>

        <p className="jaldi text-[30px] leading-[50px] text-[#0030499C] text-center mt-[30px]">
          Click the button below to download the tax return with the
          confirmation page.
        </p>

        <div className="my-[50px] flex gap-[14px] items-center justify-center">
          <div
            className="w-[58px] h-[58px] bg-[#003049] relative"
            style={{ borderRadius: "50%" }}
          >
            <img
              src={line}
              className="absolute top-[10px] left-[30px] h-[31px]"
            />
            <img
              src={down}
              className="absolute bottom-[15px] left-[15px] h-[15px] w-[32px]"
            />
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

        <div className="flex justify-end mt-40">
          <button
            onClick={() => navigate("/")}
            className="bg-[#003049] h-[58px] rounded-[4px] w-[200px] archivo font-bold text-[16px] text-[#FFFFFF]"
          >
            <p>Return to home page</p>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
