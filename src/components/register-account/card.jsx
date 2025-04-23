import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import buttonArrow from "../../assets/arrow-right-button.png";
import Progress from "../common/progress";
import {
  setupRegister,
  resetAuthAddSuccess,
} from "../../global-redux/reducers/auth/slice";
import { useSelector, useDispatch } from "react-redux";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  nino: Yup.string(),
});

const Card = ({ setShowLoginDialog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, authAddSuccess } = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      nino: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      if (!loading) {
        if (values?.terms) {
          dispatch(setupRegister(values));
        }
      }
    },
  });

  React.useEffect(() => {
    if (authAddSuccess) {
      dispatch(resetAuthAddSuccess());
      formik.resetForm();
    }
  }, [authAddSuccess]);

  return (
    <div className="card-positioning-wrap">
      <Progress title="82% complete" width="82%" />
      <div className="main-card-wrap">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h1 className="form-title">Create Account</h1>
            <p className="form-sub-title">
              Please create an account to access this and future returns.
            </p>
          </div>

          <div className="register-form-wrap">
            <div className="already-user-text">
              <p>Already have an account?</p>
              <span
                className="pointer"
                onClick={() => setShowLoginDialog(true)}
              >
                Login
              </span>
            </div>
            <div className="register-single-text-field">
              <label>Full name</label>
              <input type="text" {...formik.getFieldProps("fullName")} />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="error">{formik.errors.fullName}</p>
              )}
            </div>
            <div className="register-single-text-field">
              <label>Email</label>
              <input type="email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>
            <div className="register-single-text-field">
              <label>Password</label>
              <input type="password" {...formik.getFieldProps("password")} />
              {formik.touched.password && formik.errors.password && (
                <p className="error">{formik.errors.password}</p>
              )}
            </div>
            <div className="register-single-text-field">
              <label>Confirm Password</label>
              <input
                type="password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="error">{formik.errors.confirmPassword}</p>
                )}
            </div>
            {/* <div className="register-single-text-field">
              <label>NINO</label>
              <input type="text" {...formik.getFieldProps("nino")} />
              {formik.touched.nino && formik.errors.nino && (
                <p className="error">{formik.errors.nino}</p>
              )}
            </div> */}
            <div className="flex items-center gap-[13px]">
              <input
                type="checkbox"
                className="h-[21px] w-[21px] rounded-[2px] border border-[2px] border-[#E1E1E1]"
              />
              <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
                I’d like to receive marketing email updates from TaxReady.uk
              </p>
            </div>
            <div className="flex items-center gap-[13px]">
              <input
                type="checkbox"
                className="h-[21px] w-[21px] rounded-[2px] border border-[2px] border-[#E1E1E1]"
              />
              <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
                I agree to the Terms & Conditions, Find out how we use and
                protect your data in our Privacy Policy.{" "}
              </p>
            </div>
            <button
              type="submit"
              className="next-btn active-color form-next-button text-[#FFFF] h-[60px]"
            >
              <p>Register</p>
            </button>
          </div>

          <div className="card-button-wrap mt-40">
            <button
              type="button"
              className="back form-back-button"
              onClick={() => navigate("/checkout")}
            >
              Back
            </button>
            <button
              onClick={() => navigate("/verify-account")}
              className="next-btn active-color form-next-button"
            >
              <p>Next</p>
              <img src={buttonArrow} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
