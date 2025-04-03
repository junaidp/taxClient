import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {
  setupRegister,
  resetAuthAddSuccess,
} from "../../global-redux/reducers/auth/slice";
import apple from "../../assets/form/apple.svg";
import google from "../../assets/form/google.svg";
import facebook from "../../assets/form/facebook.svg";
import close from "../../assets/close.svg";
import "../form/index.css";

const RegisterDialog = ({ setShowLoginDialog, setRegisterDialog }) => {
  const dispatch = useDispatch();
  const { loading, authAddSuccess } = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      nino: "",
      email: "",
      password: "",
      confirmPassword: "",
      marketingUpdates: false,
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      nino: Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      if (!loading) {
        if (values?.termsAccepted) {
          dispatch(setupRegister(values));
        }
      }
    },
  });

  React.useEffect(() => {
    if (authAddSuccess) {
      dispatch(resetAuthAddSuccess());
      setRegisterDialog(false);
    }
  }, [authAddSuccess]);

  return (
    <div className="login-dialog-wrap">
      <div className="flex items-center gap-[10px] justify-end">
        <img
          src={close}
          className="cursor-pointer"
          onClick={() => setRegisterDialog(false)}
        />
      </div>
      <div>
        <h1 className="form-title">Create Account</h1>
        <p className="form-sub-title">
          Please create an account to access this and future returns.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[30px]">
        <div className="already-user-text">
          <p>Already have an account?</p>
          <span
            className="pointer"
            onClick={() => {
              setRegisterDialog(false);
              setShowLoginDialog(true);
            }}
          >
            Login
          </span>
        </div>
        <div className="register-single-text-field">
          <div className="register-first-label">
            <label>Full name</label>
            {/* <div className="login-options-wrap">
              <p>or register with</p>
              <img src={google} />
              <img src={apple} />
              <img src={facebook} />
            </div> */}
          </div>
          <input name="fullName" {...formik.getFieldProps("fullName")} />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error">{formik.errors.fullName}</p>
          )}
        </div>
        {/* <div className="register-single-text-field">
          <label>Nino</label>
          <input name="nino" {...formik.getFieldProps("nino")} />
          {formik.touched.nino && formik.errors.nino && (
            <p className="error">{formik.errors.nino}</p>
          )}
        </div> */}
        <div className="register-single-text-field">
          <label>Email</label>
          <input name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="register-single-text-field">
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
        <div className="register-single-text-field">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <div className="flex items-center gap-[13px]">
          <input
            type="checkbox"
            name="marketingUpdates"
            {...formik.getFieldProps("marketingUpdates")}
          />
          <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
            I’d like to receive marketing email updates from TaxReady.uk
          </p>
        </div>
        <div className="flex items-center gap-[13px]">
          <input
            type="checkbox"
            name="termsAccepted"
            {...formik.getFieldProps("termsAccepted")}
          />
          <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
            I agree to the Terms & Conditions, Find out how we use and protect
            your data in our Privacy Policy.
          </p>
          {formik.touched.termsAccepted && formik.errors.termsAccepted && (
            <p className="error">{formik.errors.termsAccepted}</p>
          )}
        </div>
        <div className="login-dialog-btn-wrap">
          <button
            type="submit"
            className="l-btn pointer archivo text-[#FFFF] text-[20px]"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterDialog;
