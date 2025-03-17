import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./components/common/success";
import Failure from "./components/common/failure";
import Start from "./pages/start";
import Home from "./pages/home";
import AccessDetail from "./pages/access-detail";
import ConfirmDetails from "./pages/confirm-details";
import ReportingPeriod from "./pages/reporting-period";
import CorporationTaxes from "./pages/corporation-taxes";
import BusinessTypes from "./pages/business-types";
import EmployPeople from "./pages/employ-people";
import Expense from "./pages/expense";
import Review from "./pages/review";
import CheckOut from "./pages/checkout";
import RegisterAccount from "./pages/register-account";
import VerifyAccount from "./pages/verify-account";
import Submit from "./pages/submit";
import Finished from "./pages/finished";
import { ToastContainer } from "react-toastify";
import "./App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedBusinessTypes, setSelectedBusinessTypes] = React.useState([]);
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/start"
            element={
              <Start
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            }
          />
          <Route path="/access-detail" element={<AccessDetail />} />
          <Route path="/confirm-detail" element={<ConfirmDetails />} />
          <Route path="/reporting-period" element={<ReportingPeriod />} />
          <Route path="/corporation-taxes" element={<CorporationTaxes />} />
          <Route
            path="/business-types"
            element={
              <BusinessTypes
                selectedBusinessTypes={selectedBusinessTypes}
                setSelectedBusinessTypes={setSelectedBusinessTypes}
              />
            }
          />
          <Route path="/employ-people" element={<EmployPeople />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/review" element={<Review />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/register-account" element={<RegisterAccount />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/finished" element={<Finished />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
