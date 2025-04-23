import React from "react";
import buttonArrow from "../../assets/arrow-right-button.png";
import taxArrow from "../../assets/arrow-right-tax.png";
import Progress from "../common/progress";
import PieChart from "./pie-chart"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

const Card = () => {
  const navigate = useNavigate();
  const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));
  const items = JSON.parse(sessionStorage.getItem("items"))
  const { hmrc } = useSelector((state) => state?.auth);
  function handleCalculateExpense(expenses) {
    let total = 0
    expenses.forEach(element => {
      total = total + Number(element.value)
    });
    return total
  }

  let totalIncome = 0;
  items.forEach((element) => {
    totalIncome += Number(element.totalIncome);
  });

  let totalExpenses = 0;
  items.forEach((element) => {
    element.expenses.forEach((expense) => {
      totalExpenses += Number(expense.value);
    });
  });

  return (
    <div className="card-positioning-wrap">
      <Progress title="64% complete" width="64%" />
      <div className="main-card-wrap">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="form-title">Review</h1>
          </div>
          <p className="form-sub-title">
            Based on your entries, here are the income and expenses that you are going to report to the HMRC for the period of:  {moment(reportingPeriod?.periodStartDate).format('MMMM D, YYYY')} - {moment(reportingPeriod?.periodEndDate).format('MMMM D, YYYY')}
          </p>
        </div>

        <div className="total-card-wrap">
          <h1 className="main-title">Total</h1>
          <div className="boxes-wrap">
            <div className="net-earning-wrap">
              <div>
                <h1>Your net earnings</h1>
              </div>
              <div className="img-wrap">
                <PieChart items={items} totalIncome={totalIncome} totalExpenses={totalExpenses} />
                <h1>
                  £{" "}
                  {Number(totalIncome) - Number(totalExpenses)}
                </h1>
              </div>
            </div>
            <div className="tax-due-wrap">
              <h1> Total tax due</h1>
              <h1>
                £{" "}
                {
                  hmrc?.calculation?.taxCalculation?.incomeTax
                    ?.payPensionsProfit?.incomeTaxAmount
                }
              </h1>
              <div className="para-wrap">
                <p>Learn how to reduce this tax liability</p>
                <img src={taxArrow} className="pointer" onClick={() => window.open("https://www.gov.uk/understand-self-assessment-bill", "_blank")} />
              </div>
            </div>
          </div>
        </div>

        <div className="review-grid-wrap">
          <div className="grid-header">
            <h1>By service</h1>
            <p>total income</p>
            <p>total expenses</p>
          </div>
          <div className="grid-body-wrap">
            {
              items?.map((service, ind) => {
                return <div className="single-grid-body" key={ind}>
                  <p>{service.name}</p>
                  <p>{Number(service.totalIncome)}</p>
                  <p>{handleCalculateExpense(service.expenses)}</p>
                </div>
              })
            }

          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => navigate("/expenses")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/checkout")}
          >
            <p>Next</p>
            <img src={buttonArrow} style={{ marginTop: "6px" }} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
