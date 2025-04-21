import React from "react";
import buttonArrow from "../../assets/button-arrow.png";
import progress from "../../assets/progress.png";
import taxArrow from "../../assets/tax-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({setOpen}) => {
  const navigate = useNavigate();
  const { hmrc } = useSelector((state) => state?.auth);
  return (
    <div className="card-positioning-wrap">
      <Progress title="64% complete" width="64%" />
      <div className="main-card-wrap">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="form-title">Review</h1>
            <div className="card-button-wrap">
              <button
                className="next-btn active-color form-next-button"
                onClick={()=>setOpen(true)}
              >
                <p className="">Response</p>
              </button>{" "}
            </div>
          </div>
          <p className="form-sub-title">
            Based on your entries, here are the profits and losses that you are
            going to report to the HMRC for the period of April 1, 2024 to June
            30, 2024
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
                <img src={progress} />
                <h1>
                  £{" "}
                  {hmrc?.calculation?.taxCalculation?.incomeTax
                    ?.totalTaxableIncome -
                    hmrc?.calculation?.taxCalculation?.incomeTax
                      ?.payPensionsProfit?.incomeTaxAmount}{" "}
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
                <img src={taxArrow} />
              </div>
            </div>
          </div>
        </div>

        <div className="review-grid-wrap">
          <div className="grid-header">
            <h1>By service</h1>
            <p>total income</p>
            <p>total expenses</p>
            <p>tax due</p>
          </div>
          <div className="grid-body-wrap">
            <div className="single-grid-body">
              <p>Delivery Driver</p>
              <p>£30,000.00</p>
              <p>£5,000.00</p>
              <p>£1,000.00</p>
            </div>
            <div className="single-grid-body">
              <p>Delivery Driver</p>
              <p>£30,000.00</p>
              <p>£5,000.00</p>
              <p>£1,000.00</p>
            </div>
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
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
