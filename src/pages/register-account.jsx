import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/register-account/card";
import LoginDialog from "../components/register-account/login-dialog";
import IncorrectLoginDialog from "../components/register-account/incorrect-login-dialog";
import ForgotPasswordDialog from "../components/register-account/forgot-password-dialog";
import PasswordResetDialog from "../components/register-account/password-reset-dialog";
import NewPasswordDialog from "../components/register-account/new-password-dialog";
import "./index.css";

const RegisterAccount = () => {
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [inCorrectLoginDialog, setInCorrectLoginDialog] = React.useState(false);
  const [forgotPasswordDialog, setShowForgotPasswordDialog] =
    React.useState(false);
  const [passwordResetDialog, setPasswordResetDialog] = React.useState(false);
  const [newPasswordDialog, setNewPasswordDialog] = React.useState(false);
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
            />
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
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card setShowLoginDialog={setShowLoginDialog} />
    </div>
  );
};

export default RegisterAccount;
