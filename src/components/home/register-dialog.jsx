import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import showPassword from "../../assets/eye-password-show.svg"
import hidePassword from "../../assets/eye-password-hide.svg"
import {
  setupRegister,
  resetAuthAddSuccess,
} from "../../global-redux/reducers/auth/slice";
import close from "../../assets/close.svg";
import no from "../../assets/no.svg"
import yes from "../../assets/yes.svg"
import "../form/index.css";

const RegisterDialog = ({ setShowLoginDialog, setRegisterDialog }) => {
  const dispatch = useDispatch();
  const { loading, authAddSuccess } = useSelector((state) => state?.auth);
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      marketingUpdates: false,
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
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
      setShowLoginDialog(true)
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

          </div>
          <input name="fullName" {...formik.getFieldProps("fullName")} />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error">{formik.errors.fullName}</p>
          )}
        </div>
        <div className="register-single-text-field">
          <label>Email</label>
          <input name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className={`${formik.values.password.length > 0 && "pt-[5px] px-[11px] bg-[#F8FAFB] rounded-[8px]"}`}>
          <div className="register-single-text-field relative">
            <label>Password</label>
            <input
              name="password"
              {...formik.getFieldProps("password")}
              type={showNewPassword ? "text" : "password"}

            />
            <img src={showNewPassword ? showPassword : hidePassword} onClick={() => setShowNewPassword((pre) => !pre)} className="h-[32px] w-[32px] absolute top-[45px] right-[10px] pointer" />

            {formik.touched.password && formik.errors.password && formik.errors.password === "Password is required" && (
              <p className="error">{formik.errors.password}</p>
            )}
          </div>
          {formik.values.password.length > 0 && (
            <div className="flex flex-col gap-[5px] mt-[11px]">
              <div className="flex items-center gap-[4px]">
                <img src={formik.values.password.length >= 8 ? yes : no} />
                <p
                  className={`archivo text-[14px] ${formik.values.password.length >= 8 ? "text-[#34C759]" : "text-[#616161]"
                    }`}
                >
                  Minimum 8 characters
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <img src={/[A-Z]/.test(formik.values.password) ? yes : no} />
                <p
                  className={`archivo text-[14px] ${/[A-Z]/.test(formik.values.password) ? "text-[#34C759]" : "text-[#616161]"
                    }`}
                >
                  At least one uppercase letter
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <img src={/\d/.test(formik.values.password) ? yes : no} />
                <p
                  className={`archivo text-[14px] ${/\d/.test(formik.values.password) ? "text-[#34C759]" : "text-[#616161]"
                    }`}
                >
                  At least one number
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <img src={/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) ? yes : no} />
                <p
                  className={`archivo text-[14px] ${/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) ? "text-[#34C759]" : "text-[#616161]"
                    }`}
                >
                  At least one special character
                </p>
              </div>
            </div>
          )}

        </div>
        <div className="register-single-text-field relative">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
            type={showConfirmNewPassword ? "text" : "password"}
          />
          <img src={showConfirmNewPassword ? showPassword : hidePassword} onClick={() => setShowConfirmNewPassword((pre) => !pre)} className="h-[32px] w-[32px] absolute top-[45px] right-[10px] pointer" />

          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <div className="flex items-center gap-[13px]">
          <input
            type="checkbox"
            name="marketingUpdates"
            className="h-[20px] w-[20px]"
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
            className="h-[20px] w-[20px]"
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
