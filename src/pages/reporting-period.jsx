import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/reporting-period/card";
import { useDispatch, useSelector } from "react-redux";
import { setupGetObligationDetail } from "../global-redux/reducers/tax/slice"

const ReportingPeriod = () => {
  const dispatch = useDispatch()
  const { obligation, loading, token } = useSelector((state) => state?.tax)
  const nino = sessionStorage.getItem("nino")

  React.useEffect(() => {
    dispatch(setupGetObligationDetail({ token, nino }))
  }, [])

  return (
    <div className="cards-wrapper">
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card obligation={obligation} loading={loading} />
    </div>
  );
};

export default ReportingPeriod;
