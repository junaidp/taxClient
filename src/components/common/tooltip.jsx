import React, { useState } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ text, children, left }) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState(null);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <>
      <div
        className="tooltip-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {show && text && coords &&
        createPortal(
          <div
            className="tooltip-box"
            style={{
              position: "absolute",
              top: coords.top - 40, // adjust as needed
              left: left ? coords.left - 80 : coords.left + coords.width / 2,
              transform: left ? "none" : "translateX(-50%)",
              zIndex: 1000,
              background: "#333",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "4px",
              whiteSpace: "nowrap"
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
