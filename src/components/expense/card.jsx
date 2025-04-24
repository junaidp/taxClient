import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import buttonArrow from "../../assets/arrow-right-button.png";
import cross from "../../assets/add.svg";

import Progress from "../common/progress";
import ExpenseDialog from "./expense-dialog";

import { services, infoArray } from '../../config/constants';
import moment from "moment";

const Card = () => {
  const navigate = useNavigate();
  const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));

  const [showExpenseDialog, setShowExpenseDialog] = React.useState(false);
  const [items, setItems] = React.useState(JSON.parse(sessionStorage.getItem("items")) || []);
  const [count, setCount] = React.useState(JSON.parse(sessionStorage.getItem("count")) || 0);

  const isNextEnabled = React.useMemo(() => {
    const isExpenseValEntered = items[count]?.expenses?.some(exp => exp.value?.toString().trim() !== "");
    if (items[count]?.totalIncome || (isExpenseValEntered && items[count]?.totalIncome)) {
      return true
    }
    else {
      return false
    }
  }, [items, count]);


  function handleChangeTotalIncome(event, mainId) {
    const { value } = event.target;
    setItems(prevItems =>
      prevItems.map(businessType =>
        businessType.id === mainId
          ? {
            ...businessType,
            totalIncome: value
          }
          : businessType
      )
    );
  }

  function handleExpenseChange(event, mainId, subId) {
    const { value } = event.target;
    setItems(prevItems =>
      prevItems.map(businessType =>
        businessType.id === mainId
          ? {
            ...businessType,
            expenses: businessType.expenses.map(expense =>
              expense.id === subId ? { ...expense, value } : expense
            ),
          }
          : businessType
      )
    );
  }

  function handleClickExpense(mainId, subId, expense) {
    const infoItem = infoArray.find((item) => item.name === expense)
    if (!infoItem) return
    setItems(prevItems =>
      prevItems.map(businessType =>
        businessType.id === mainId
          ? {
            ...businessType,
            expenses: businessType.expenses.map(expense =>
              expense.id === subId ? { ...expense, expanded: true, infoValue: infoItem.info } : { ...expense, expanded: false, infoValue: "" }
            ),
          }
          : businessType
      )
    );
  }

  function handleClickBack() {
    if (count === 0) {
      navigate("/employ-people");
    } else {
      setCount(prev => prev - 1);
    }
  }

  function handleClickNext() {
    if (!isNextEnabled) return
    const countVal = count + 1;
    if (countVal === items.length) {
      navigate("/review");
    } else {
      setCount(prev => prev + 1);
    }
  }

  React.useEffect(() => {
    const storageItems = JSON.parse(sessionStorage.getItem("items"));
    setItems(storageItems);

    if (storageItems && storageItems.length) return;

    let selected = JSON.parse(sessionStorage.getItem("selectedBusinessTypes"));
    const filteredItems = services?.filter(service => selected?.includes(service?.name));

    const newItems = filteredItems?.map(item => {
      const mappedExpenses = item.expenses.slice(0, 9).map(expense => ({
        name: expense,
        selected: true,
        locked: false,
        id: uuidv4(),
        value: "",
        expanded: false,
        infoValue: ""
      }));

      return {
        ...item,
        totalIncome: "",
        expenses: [
          {
            name: "Bank fees",
            selected: true,
            locked: true,
            id: uuidv4(),
            value: "",
            expanded: false,
            infoValue: ""
          },
          ...mappedExpenses,
        ],
      };
    });

    setItems(newItems);
    sessionStorage.setItem("items", JSON.stringify(newItems));
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    sessionStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const selectedBusiness = items[count];

  return (
    <div className="card-positioning-wrap">
      <Progress title="55% complete" width="55%" />
      <div className="main-card-wrap">
        {showExpenseDialog && (
          <div className="model-parent">
            <div
              className="absolute top-0 left-0 right-0 bg-[#40B7B0] h-full w-full opacity-[0.14]"
              onClick={() => setShowExpenseDialog(false)}
            />
            <div className="model-wrap-expense">
              <ExpenseDialog
                setShowExpenseDialog={setShowExpenseDialog}
                setItems={setItems}
                selectedExpenses={selectedBusiness.expenses.map(exp => exp.name)}
                businessTypeId={selectedBusiness?.id}
              />
            </div>
          </div>
        )}

        <div>
          <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
            For your{" "}
            <span className="text-[rgb(196, 196, 196)] font-bold">
              {selectedBusiness?.name === "Landlord" ? "Landlord (UK Property)" : selectedBusiness?.name}
            </span>{" "}
            services, enter the income and expense totals {selectedBusiness?.name === "Landlord" ? "for all relevant properties" : "only"} for period:  {moment(reportingPeriod?.periodStartDate).format('MMMM D, YYYY')} - {moment(reportingPeriod?.periodEndDate).format('MMMM D, YYYY')}
          </p>
        </div>

        {items?.length > 0 && (
          <div className="px-[50px] max-h-[350px] overflow-y-auto">
            <div className="final-form-input-main-wrap">
              <label className="archivo text-[24px] leading-[26px] text-[#06263E]">
                Total Income
              </label>
              <div className={`final-form-input-wrap mr-[20px]`}>
                <p className="medium">£</p>
                <input className={`px-[20px]`} style={{ borderColor: !isNextEnabled ? "#D3984E" : "#c4c4c4", border: !isNextEnabled ? "2px solid #D3984E " : "1px solid #c4c4c4" }} type="number" value={selectedBusiness.totalIncome} onChange={(e) => handleChangeTotalIncome(e, selectedBusiness.id)} />
              </div>
            </div>

            <p className="archivo text-[24px] leading-[26px] text-[#06263E]">Expenses</p>
            <div className="expense-input-wrap">
              {selectedBusiness.expenses
                .map((expense, ind) => (
                  <div key={ind} className={`px-[18px]  ${expense.expanded && "bg-[#F8FAFB] rounded-[8px] my-[14px]  py-[14px] "}`} onClick={() => handleClickExpense(selectedBusiness?.id, expense?.id, expense.name)}>
                    <div className="expense-item">
                      <label className="text-[20px] archivo font-bold text-[#616161]" style={{ color: "[#06263E]" }}>
                        {expense?.name}
                      </label>
                      <div className="final-form-input-wrap">
                        <input
                          className="px-[20px]"
                          type="number"
                          value={expense.value}
                          onChange={(e) => handleExpenseChange(e, selectedBusiness?.id, expense?.id)}
                        />
                        <p className="medium">£</p>
                      </div>
                    </div>
                    {
                      expense.expanded &&
                      <p className="archivo text-[16px] text-[#616161]">{expense.infoValue}</p>
                    }
                  </div>
                ))}

              <div className="add-expense-wrap pointer" onClick={() => setShowExpenseDialog(true)}>
                <div className="h-[18px] w-[18px] bg-[#003049] flex justify-center items-center rounded-full">
                  <img src={cross} />
                </div>
                <p style={{ color: "#06263E" }}>add/ remove expense category</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-end w-[100%] justify-end mt-40">
          {
            !isNextEnabled &&
            <p className="flex items-end archivo text-[16px] text-[#D3984E]">Please enter at least total income before continuing.</p>
          }

        </div>
        <div className="card-button-wrap mt-[7px]">
          <button className="back form-back-button" onClick={handleClickBack}>
            Back
          </button>
          <button className={`next-btn  ${isNextEnabled && "form-next-button active-color text-[24px]"
            }`} onClick={handleClickNext} style={{ cursor: isNextEnabled ? "pointer" : "not-allowed" }}>
            <p>Next</p>
            <img src={buttonArrow} style={{ marginTop: "6px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
