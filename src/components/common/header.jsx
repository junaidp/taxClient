import React from "react";
import "./index.css";
import logo from "../../assets/user-info/logo.svg";
import flag from "../../assets/common/flag.svg";
import { useNavigate } from "react-router-dom";

const header = () => {
  const navigate = useNavigate();
  return (
    <div className="common-header-wrap">
      <div className="logo-wrapper">
        <img src={logo} onClick={() => navigate("/")} className="pointer" />
      </div>
      {/* <div className="common-header-right-wrap">
        <p>Login</p>
        <img src={flag} />
      </div> */}
    </div>
  );
};

export default header;
