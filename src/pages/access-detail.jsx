import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/access-detail/card";
import axios from "axios";
import { BASE_URL } from "../config/constants";
import { useLocation } from "react-router-dom";
import {
  handleSetToken
} from "../global-redux/reducers/auth/slice";
import { useDispatch } from "react-redux";
import "./index.css";

const AccessDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!location?.search) return;

    const code = location.search.split("=")[1];
    if (!code) return;
    setLoading(true);

    sessionStorage.setItem("code", code);

    const getToken = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/external/redirect?code=${code}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        const token = response?.data;
        if (
          token === "Failed to get token Token request failed: invalid_request"
        ) {
          setLoading(false);
          return;
        }
        dispatch(handleSetToken(token));
        sessionStorage.setItem("token", token);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching token or calculation data:", error);
        setLoading(false);
      }
    };

    getToken();
  }, [location?.search]);

  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card loading={loading} />
    </div>
  );
};

export default AccessDetails;
