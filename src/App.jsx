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
import About from "./pages/about";
import Pricing from "./pages/pricing"
import Contact from "./pages/contact"
import FAQ from "./pages/faq";
import InsuranceNumber from "./pages/insurance-number";
import LoginDialog from "./components/home/login-dialog";
import MyProfileDialog from "./components/home/my-profile-dialog";
import IncorrectLoginDialog from "./components/register-account/incorrect-login-dialog";
import ForgotPasswordDialog from "./components/register-account/forgot-password-dialog";
import PasswordResetDialog from "./components/register-account/password-reset-dialog";
import NewPasswordDialog from "./components/register-account/new-password-dialog";
import RegisterDialog from "./components/home/register-dialog";
import InformationWindow from "./pages/information-window"
import { ToastContainer } from "react-toastify";
import "./App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = React.useState(sessionStorage.getItem("selectedOption") || "");
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [showMyProfileDialog, setShowMyProfileDialog] = React.useState(false);
  const [inCorrectLoginDialog, setInCorrectLoginDialog] = React.useState(false);
  const [forgotPasswordDialog, setShowForgotPasswordDialog] =
    React.useState(false);
  const [passwordResetDialog, setPasswordResetDialog] = React.useState(false);
  const [newPasswordDialog, setNewPasswordDialog] = React.useState(false);
  const [registerDialog, setRegisterDialog] = React.useState(false);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = React.useState(JSON.parse(sessionStorage.getItem("selectedBusinessTypes")) || []);
  return (
    <div>
      {showLoginDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <LoginDialog
              setShowLoginDialog={setShowLoginDialog}
              setInCorrectLoginDialog={setInCorrectLoginDialog}
              setShowForgotPasswordDialog={setShowForgotPasswordDialog}
              setRegisterDialog={setRegisterDialog}
            />
          </div>
        </div>
      )}
      {showMyProfileDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] bottom-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <MyProfileDialog setShowMyProfileDialog={setShowMyProfileDialog} />
          </div>
        </div>
      )}
      {inCorrectLoginDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <IncorrectLoginDialog
              setInCorrectLoginDialog={setInCorrectLoginDialog}
            />
          </div>
        </div>
      )}
      {forgotPasswordDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <ForgotPasswordDialog
              setShowForgotPasswordDialog={setShowForgotPasswordDialog}
              setPasswordResetDialog={setPasswordResetDialog}
            />
          </div>
        </div>
      )}
      {passwordResetDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <PasswordResetDialog
              setPasswordResetDialog={setPasswordResetDialog}
              setNewPasswordDialog={setNewPasswordDialog}
            />
          </div>
        </div>
      )}
      {newPasswordDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <NewPasswordDialog setNewPasswordDialog={setNewPasswordDialog} />
          </div>
        </div>
      )}
      {registerDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <RegisterDialog
              setRegisterDialog={setRegisterDialog}
              setShowLoginDialog={setShowLoginDialog}
            />
          </div>
        </div>
      )}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setShowLoginDialog={setShowLoginDialog} setShowMyProfileDialog={setShowMyProfileDialog} />} />
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
          <Route path="/about" element={<About setShowLoginDialog={setShowLoginDialog}
            setShowMyProfileDialog={setShowMyProfileDialog} />} />
          <Route path="/pricing" element={<Pricing setShowLoginDialog={setShowLoginDialog}
            setShowMyProfileDialog={setShowMyProfileDialog} />} />
          <Route path="/contact" element={<Contact setShowLoginDialog={setShowLoginDialog}
            setShowMyProfileDialog={setShowMyProfileDialog} />} />
          <Route path="/faq" element={<FAQ setShowLoginDialog={setShowLoginDialog}
            setShowMyProfileDialog={setShowMyProfileDialog} />} />
          <Route path="/insurance-number" element={<InsuranceNumber />} />
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
          <Route path="/information-window" element={<InformationWindow />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/review" element={<Review />} />
          <Route path="/checkout" element={<CheckOut setShowLoginDialog={setShowLoginDialog} showLoginDialog={showLoginDialog} />} />
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
