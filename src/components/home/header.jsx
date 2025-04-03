import React from "react";
import logo from "../../assets/home/home-logo.svg";
import flag from "../../assets/common/flag.svg";
import { useLocation } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ setShowLoginDialog, setShowMyProfileDialog }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state?.auth);

  return (
    <div className="home-header-wrap">
      <div className="home-logo-text-wrap">
        <div className="home-logo-wrap">
          <img src={logo} />
        </div>
      </div>
      <div className="home-links">
        <p className={pathname === "/" && "inline-block border-b-2 border-black"} onClick={() => navigate("/")}>
          Home
        </p>

        <div className="line"></div>
        <p className={pathname === "/about" && "inline-block border-b-2 border-black"} onClick={() => navigate("/about")}>About</p>
        <div className="line"></div>
        <p className={pathname === "/pricing" && "inline-block border-b-2 border-black"} onClick={() => navigate("/pricing")}>Pricing</p>
        <div className="line"></div>

        <p className={pathname === "/contact" && "inline-block border-b-2 border-black"} onClick={() => navigate("/contact")}>Contact</p>
        <div className="line"></div>

        <p className={pathname === "/faq" && "inline-block border-b-2 border-black"}>FAQ</p>
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
