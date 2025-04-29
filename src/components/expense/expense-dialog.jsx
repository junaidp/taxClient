import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus-light.svg";
import lock from "../../assets/lock.svg";
import Tooltip from "../../components/common/tooltip";
import "../form/index.css";

const ExpenseDialog = ({ setItems, setShowExpenseDialog, selectedBusiness, businessTypeId }) => {

  function handleClick(id) {
    setItems((pre) => pre.map((service) => service.id === businessTypeId ? { ...service, expenses: service.expenses.map((expense) => expense.id === id ? { ...expense, selected: !expense.selected, value: !expense.selected === false ? 0 : expense.value } : expense) } : service))
  }

  return (
    <div className="px-[18px] py-[45px]">
      <h1 className="archivo text-[24px] text-[#06263E]">Add expense type</h1>

      <div className="mt-[24px] ml-[20px]">
        {selectedBusiness?.expenses?.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.locked === "Yes" && (
              <Tooltip
                left={true}
                text="This expenses category cannot be removed as it is locked by default by the taxready.co.uk software as it is a common expense for the service type you have selected."
              >
                <img src={lock} className="pointer" />
              </Tooltip>
            )}

            {item.locked === "No" && !item.selected && (
              <img
                src={plus}
                className="pointer"
                onClick={() => handleClick(item.id)}
              />
            )}

            {item.locked === "No" && item.selected && (
              <img
                src={minus}
                className="pointer"
                onClick={() => handleClick(item.id)}
              />
            )}

            <p
              className={`archivo text-[24px] ${item.selected
                ? "text-[#5E7D8C]"
                : "text-[#06263E]"
                }`}
            >
              {item?.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[16px] mt-[50px] justify-end">
        <button
          className="pointer border border-[#C88F47] rounded-[4px] w-[162px] h-[50px] archivo text-[#FFFFFF] text-[20px] bg-[#003049] leading-[26px]"
          onClick={() => setShowExpenseDialog(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExpenseDialog;
