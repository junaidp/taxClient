import React from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Body from "../components/home/body";
import { collectGovClientHeaders } from "../config/helpers";
import { BASE_URL } from "../config/constants"
import axios from "axios";

const Home = ({ setShowLoginDialog,
  setShowMyProfileDialog }) => {

  const handleClickStartButton = async () => {
    const headers = await collectGovClientHeaders("john.doe@example.com");
    let params = "";
    Object.keys(headers).map((key, ind) => {
      if (ind === 0) {
        params = params + `?${key}=${headers[key]}`
      }
      else {
        params = params + `&${key}=${headers[key]}`
      }
    })
    await axios.get(`${BASE_URL}/api/tax/fraud_headers${params}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
  }

  return (
    <div>
      <Header
        setShowLoginDialog={setShowLoginDialog}
        setShowMyProfileDialog={setShowMyProfileDialog}
      />
      <Hero handleClickStartButton={handleClickStartButton} />
      <Body />
    </div>
  );
};

export default Home;
