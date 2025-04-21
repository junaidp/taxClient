import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import close from "../../assets/close.svg";
import flag from "../../assets/flag.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  setupLogin,
  resetAuthAddSuccess,
} from "../../global-redux/reducers/auth/slice";
import "../form/index.css";

const LoginDialog = ({
  setShowLoginDialog,
  setInCorrectLoginDialog,
  setShowForgotPasswordDialog,
}) => {
  const dispatch = useDispatch();
  const { loading, authAddSuccess } = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      nino: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      if (!loading) {
        dispatch(setupLogin(values));
      }
    },
  });

  React.useEffect(() => {
    if (authAddSuccess) {
      dispatch(resetAuthAddSuccess());
      setShowLoginDialog(false);
    }
  }, [authAddSuccess]);

  return (
    <div className="login-dialog-wrap">
      <div className="flex items-center gap-[10px] justify-end">
        <img src={flag} />
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
          <input type="email" name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="login-single-text-field-wrap">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        {/* <div className="login-single-text-field-wrap">
          <label>NINO</label>
          <input type="text" name="nino" {...formik.getFieldProps("nino")} />
          {formik.touched.nino && formik.errors.nino && (
            <p className="error">{formik.errors.nino}</p>
          )}
        </div> */}
        <div className="login-dialog-btn-wrap">
          <div className="login-btn-first-wrap">
            <button type="submit" className="l-btn pointer">
              <p>{loading ? "Loading..." : "Login"}</p>
            </button>
            <div className="remember-me-wrap">
              <input
                type="checkbox"
                name="rememberMe"
                {...formik.getFieldProps("rememberMe")}
              />
              <p>Remember me</p>
            </div>
          </div>
          <div
            className="pointer"
            onClick={() => setShowForgotPasswordDialog(true)}
          >
            <p className="login-dialog-forget-password-text">
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
          <span onClick={() => setShowLoginDialog(false)} className="pointer">
            Sign up for free
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
