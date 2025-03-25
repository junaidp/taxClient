import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import cross from "../../assets/cross.svg";
import ExpenseDialog from "./expense-dialog";
import { useNavigate } from "react-router-dom";
import { services } from '../../config/constants'

const Card = () => {
  const navigate = useNavigate();
  const [showExpenseDialog, setShowExpenseDialog] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const handleNext = async () => {
    navigate("/review");
  };

  React.useEffect(() => {
    let items = JSON.parse(sessionStorage.getItem('selectedBusinessTypes'));
    items = services?.filter((service) => items?.includes(service?.name));

    let filteredItems = [];

    items?.forEach((item) => {
      item?.expenses?.forEach((expense) => {
        filteredItems.push(expense);
      });
    });

    items = [...new Set(filteredItems)]

    const newItems = items?.map((item) => {
      return {
        name: item,
        locked: false,
        selected: false
      }
    })

    setItems(newItems)

  }, [])

  return (
    <div className="card-positioning-wrap">
      <Progress title="55% complete" width="55%" />
      <div className="main-card-wrap">
        {showExpenseDialog && (
          <div className="model-parent">
            <div
              className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"
              onClick={() => setShowExpenseDialog(false)}
            ></div>
            <div className="model-wrap-expense">
              <ExpenseDialog
                setShowExpenseDialog={setShowExpenseDialog}
                items={items}
                setItems={setItems}
              />
            </div>
          </div>
        )}
        <div>
          <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
            For your{" "}
            <span className="text-[rgb(196, 196, 196)]">Delivery Driver</span>{" "}
            services, enter the income and expense totals only for period: April
            1, 2024 to June 30, 2024
          </p>
        </div>
        <div>
          <div className="final-form-input-main-wrap">
            <label className="archivo text-[24px] leading-[26px] text-[#06263E]">
              Total Income
            </label>
            <div className="final-form-input-wrap">
              <input className="px-[20px]" type="number" />
              <p className="medium">£</p>
            </div>
          </div>
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">
            Expenses
          </p>
          <div className="expense-input-wrap">
            {items
              ?.filter((item) => item?.selected)
              ?.map((expense, ind) => {
                return (
                  <div className="expense-item" key={ind}>
                    <label
                      className="light-label archivo"
                      style={{ color: "#06263E" }}
                    >
                      {expense?.name}
                    </label>
                    <div className="final-form-input-wrap">
                      <input className="px-[20px]" type="number" />
                      <p className="medium">£</p>
                    </div>
                  </div>
                );
              })}
            <div
              className="add-expense-wrap pointer"
              onClick={() => setShowExpenseDialog(true)}
            >
              <div
                className="h-[18px] w-[18px] bg-[#003049] flex justify-center items-center"
                style={{ borderRadius: "50%" }}
              >
                <img src={cross} />
              </div>
              <p style={{ color: "#06263E" }}>add/ remove expense category</p>
            </div>
          </div>
        </div>
        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/employ-people")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={handleNext}
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
