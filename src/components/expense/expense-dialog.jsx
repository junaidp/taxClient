import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import lock from "../../assets/lock.svg";
import "../form/index.css";

const ExpenseDialog = ({ items, setItems, setShowExpenseDialog }) => {
  function handleClick(id) {
    setItems((pre) => {
      return pre?.map((item) =>
        item?.id === id ? { ...item, selected: !item?.selected } : item
      );
    });
  }
  return (
    <div className="px-[18px] py-[45px]">
      <h1 className="archivo text-[24px]  text-[##06263E]">Add expense type</h1>

      <div className="mt-[24px] ml-[20px]">
        {items?.map((item, ind) => {
          return (
            <div key={ind} className="flex items-center">
              {item?.locked && <img src={lock} className="pointer" />}
              {item?.selected && item?.locked === false && (
                <img
                  src={plus}
                  className="pointer"
                  onClick={() => handleClick(item?.id)}
                />
              )}
              {!item?.selected && item?.locked === false && (
                <img
                  src={minus}
                  className="pointer"
                  onClick={() => handleClick(item?.id)}
                />
              )}

              <p
                className={`archivo ${
                  item?.selected ? "text-[#06263E]" : "text-[#5E7D8C]"
                } text-[24px]`}
              >
                {item?.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-[16px] mt-[50px] justify-end">
        <button
          className="border border-[1px] pointer border-[#C88F47] rounded-[4px] rounded-[4px] w-[200px] h-[50px] w-[162px] archivo text-[#FFFFFF] text-[20px] bg-[#003049] leading-[26px]"
          onClick={() => setShowExpenseDialog(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExpenseDialog;
