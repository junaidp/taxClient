import React from "react";
import logo from "../../assets/home/home-logo.svg";
import flag from "../../assets/common/flag.svg";
import "./index.css";
import { useSelector } from "react-redux";

const Header = ({ setShowLoginDialog, setShowMyProfileDialog }) => {
  const { user } = useSelector((state) => state?.auth);
  return (
    <div className="home-header-wrap">
      <div className="home-logo-text-wrap">
        <div className="home-logo-wrap">
          <img src={logo} />
        </div>
      </div>
      <div className="home-links">
        <p>About</p>
        <div className="line"></div>
        <p>Pricing</p>
        <div className="line"></div>

        <p>Contact</p>
        <div className="line"></div>

        <p>FAQ</p>
        <div className="line"></div>
      </div>
      <div className="home-login-btn-wrap">
        {user?.username || Object.keys(user)?.length ? (
          // '<img
          //   src={flag}
          //   className="pointer"
          //   onClick={() => setShowMyProfileDialog(true)}
          // />'

          <p
            className="pointer"
            style={{ color: "grey" }}
            onClick={() => setShowMyProfileDialog(true)}
          >
            {user?.username}
          </p>
        ) : (
          <div
            className="home-header-button pointer"
            onClick={() => setShowLoginDialog(true)}
          >
            <p className="pointer">Login</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
