import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import close from "../../assets/close.svg";
import flag from "../../assets/flag.svg";
import showPassword from "../../assets/eye-password-show.svg"
import hidePassword from "../../assets/eye-password-hide.svg"
import { useDispatch, useSelector } from "react-redux";
import {
  setupLogin,
  resetAuthAddSuccess,
  handleChangeInCorrectCredentials,
} from "../../global-redux/reducers/auth/slice";
import "../form/index.css";

const LoginDialog = ({
  setShowLoginDialog,
  setInCorrectLoginDialog,
  setShowForgotPasswordDialog,
  setRegisterDialog,
}) => {
  const dispatch = useDispatch();
  const { loading, authAddSuccess, inCorrectCredentials } = useSelector(
    (state) => state?.auth
  );

  const [show, setShow] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      nino: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(setupLogin(values));
    },
  });

  React.useEffect(() => {
    if (authAddSuccess) {
      dispatch(resetAuthAddSuccess());
      setRegisterDialog(false);
      setShowLoginDialog(false);
    }
  }, [authAddSuccess]);

  React.useEffect(() => {
    if (inCorrectCredentials) {
      setInCorrectLoginDialog(true);
      dispatch(handleChangeInCorrectCredentials(false));
    }
  }, [inCorrectCredentials]);

  return (
    <div className="login-dialog-wrap">
      <div className="flex items-center gap-[10px] justify-end">
        {/* <img src={flag} /> */}
        <img
          src={close}
          className="cursor-pointer"
          onClick={() => setShowLoginDialog(false)}
        />
      </div>
      <div className="login-header">
        <h1 className="form-title">Login</h1>
        <p className="form-sub-title">Enter your login details below.</p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="login-dialog-text-fields-wrap"
      >
        <div className="login-single-text-field-wrap">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        {/* <div className="login-single-text-field-wrap">
          <label>Nino</label>
          <input
            type="nino"
            name="nino"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nino}
          />
          {formik.touched.nino && formik.errors.nino && (
            <p className="error">{formik.errors.nino}</p>
          )}
        </div> */}
        <div className="login-single-text-field-wrap relative">
          <label>Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <img src={show ? showPassword : hidePassword} onClick={() => setShow((pre) => !pre)} className="h-[32px] w-[32px] absolute top-[45px] right-[10px] pointer" />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div className="login-dialog-btn-wrap">
          <div className="login-btn-first-wrap">
            <button type="submit" className="l-btn pointer" disabled={loading}>
              <p>{loading ? "Logging in..." : "Login"}</p>
            </button>
            <div className="remember-me-wrap">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>
          <div onClick={() => setShowForgotPasswordDialog(true)}>
            <p className="login-dialog-forget-password-text pointer">
              Forgot Password?
            </p>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-[30px] mt-[30px]">
        {/* <div className="login-options-wrap">
          <p>or login with</p>
          <img src={google} />
          <img src={apple} />
          <img src={facebook} />
        </div> */}
        <div className="logn-register-option">
          <p>Don’t have an account? </p>
          <span
            onClick={() => {
              setShowLoginDialog(false);
              setRegisterDialog(true);
            }}
            className="pointer"
          >
            Sign up for free
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
