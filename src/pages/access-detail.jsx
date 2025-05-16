import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/access-detail/card";
import { useLocation } from "react-router-dom";
import { setupGetToken, handleSetCode } from "../global-redux/reducers/tax/slice"
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const AccessDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, token } = useSelector((state) => state?.tax)

  React.useEffect(() => {
    if (!location?.search) return;

    const code = location.search.split("=")[1];
    if (!code) return;
    if (token) return

    dispatch(handleSetCode(code))
    dispatch(setupGetToken({ code }))
  }, [location?.search]);

  return (
    <div className="cards-wrapper">
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card loading={loading} />
    </div>
  );
};

export default AccessDetails;
