import React from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Body from "../components/home/body";

const Home = ({ setShowLoginDialog,
  setShowMyProfileDialog }) => {

  return (
    <div>
      <Header
        setShowLoginDialog={setShowLoginDialog}
        setShowMyProfileDialog={setShowMyProfileDialog}
      />
      <Hero />
      <Body />
    </div>
  );
};

export default Home;
