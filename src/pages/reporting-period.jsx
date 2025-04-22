import React from "react";
import Header from "../components/common/header";
import bars from "../assets/bars.svg";
import Card from "../components/reporting-period/card";
import { BASE_URL } from "../config/constants"
import "./index.css";
import axios from "axios";

const ReportingPeriod = () => {
  const nino = sessionStorage.getItem("nino")
  const token = sessionStorage.getItem("token")
  const [obligation, setObligation] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const start = async () => {
      try {
        setLoading(true)
        const { data: { obligations } } = await axios.get(`${BASE_URL}/api/external/getObligationDetail?nino=HG838408B&token=2cb4104333fbae07fde246596dd51a21`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        })
        setObligation(obligations.filter((item) => item.typeOfBusiness === "self-employment"))
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    start()
  }, [])
  console.log(obligation)
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card obligation={obligation} loading={loading} />
    </div>
  );
};

export default ReportingPeriod;
