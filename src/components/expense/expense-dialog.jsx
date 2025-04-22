import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import lock from "../../assets/lock.svg";
import { services } from "../../config/constants";
import { v4 as uuidv4 } from "uuid";
import Tooltip from "../../components/common/tooltip";
import "../form/index.css";

const ExpenseDialog = ({ setItems, setShowExpenseDialog, selectedExpenses, businessTypeId }) => {
  const [businessTypeExpenses, setBusinessTypeExpenses] = React.useState([]);

  function handleClick(name) {
    setItems((prevItems) =>
      prevItems.map((businessType) => {
        if (businessType.id !== businessTypeId) return businessType;

        const exists = businessType.expenses?.some((expense) => expense.name === name);

        return {
          ...businessType,
          expenses: exists
            ? businessType.expenses.filter((item) => item?.name !== name)
            : [
                ...businessType.expenses,
                {
                  name,
                  selected: true,
                  id: uuidv4(),
                  value: "",
                },
              ],
        };
      })
    );
  }

  React.useEffect(() => {
    const allExpenses = [];

    services?.forEach((service) => {
      service?.expenses?.forEach((expense) => {
        allExpenses.push(expense);
      });
    });

    const uniqueExpenses = [...new Set(allExpenses)];
    setBusinessTypeExpenses(uniqueExpenses);
  }, []);

  return (
    <div className="px-[18px] py-[45px]">
      <h1 className="archivo text-[24px] text-[#06263E]">Add expense type</h1>

      <div className="mt-[24px] ml-[20px]">
        {["Bank fees", ...businessTypeExpenses]?.map((item, index) => (
          <div key={index} className="flex items-center">
            {item === "Bank fees" && (
              <Tooltip
                left={true}
                text="This expenses category cannot be removed as it is locked by default by the taxready.co.uk software as it is a common expense for the service type you have selected."
              >
                <img src={lock} className="pointer" />
              </Tooltip>
            )}

            {item !== "Bank fees" && !selectedExpenses.includes(item) && (
              <img
                src={plus}
                className="pointer"
                onClick={() => handleClick(item)}
              />
            )}

            {item !== "Bank fees" && selectedExpenses.includes(item) && (
              <img
                src={minus}
                className="pointer"
                onClick={() => handleClick(item)}
              />
            )}

            <p
              className={`archivo text-[24px] ${
                selectedExpenses.includes(item)
                  ? "text-[#06263E]"
                  : "text-[#5E7D8C]"
              }`}
            >
              {item}
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
