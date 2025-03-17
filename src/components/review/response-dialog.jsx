import React from "react";
import { useSelector } from "react-redux";
import cross from "../../assets/close.svg";

const ResponseDialog = ({ setOpen }) => {
  const { hmrc } = useSelector((state) => state?.auth);
  return (
    <div className="px-[20px]">
      <div className="flex items-center gap-[16px] mt-[50px] justify-end">
        <div>
          <img
            src={cross}
            className="h-[60px] w-[60px] absolute  right-[20px] mb-[20px] top-[20px] pointer"
            onClick={() => setOpen(false)}
          />
          <div className="mt-[70px]">
            <pre>
              <code>{JSON.stringify(hmrc, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDialog;
