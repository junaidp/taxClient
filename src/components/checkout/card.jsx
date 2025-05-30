import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import buttonArrow from "../../assets/arrow-right-button.png";
import Progress from "../common/progress";
import discount from "../../assets/discount.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const stripePromise = loadStripe(
  "pk_test_51L3igsAX34JgbNaA4c0rd2PAl8EayvBReK9w2M1yp3Ep8Mlz29MkPvMzHgVfS17dGsQ3nVQs9da8kwBtDxm8lx4S00VxEkycWL"
);

const CheckoutForm = ({
  setLoading,
  setSuccess,
  triggerPayment,
  success,
  check,
  showError,
  showLoginDialog,
  user
}) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const reportingPeriod = JSON.parse(sessionStorage.getItem("reportingPeriod"));
  const elements = useElements();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [expiryComplete, setExpiryComplete] = useState(false);
  const [cvcComplete, setCvcComplete] = useState(false);
  const [isCardComplete, setIsCardComplete] = React.useState(false);

  const handleCardChange = (event, field) => {
    if (field === "cardNumber") {
      setCardNumberComplete(event.complete);
    }
    if (field === "expiry") {
      setExpiryComplete(event.complete);
    }
    if (field === "cvc") {
      setCvcComplete(event.complete);
    }
  };

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    if (!name || !email || !isCardComplete) {
      showError("Please complete all required fields.");
      return;
    }

    setLoading(true);
    const res = await fetch(
      "https://stripe-back-end-chi.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 20, name, email }),
      }
    );
    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: { name, email },
      },
    });

    if (result.error) {
      navigate("/failure");
    } else if (result.paymentIntent.status === "succeeded") {
      navigate("/submit");
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (triggerPayment && success) {
      handlePayment();
    }
    if (!showLoginDialog && success && Object.keys(user).length) {
      handlePayment();
    }
  }, [triggerPayment, showLoginDialog]);

  React.useEffect(() => {
    if (name && email && isCardComplete && check) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [name, email, isCardComplete, check]);

  React.useEffect(() => {
    if (cardNumberComplete && expiryComplete && cvcComplete) {
      setIsCardComplete(true);
    } else {
      setIsCardComplete(false);
    }
  }, [cardNumberComplete, expiryComplete, cvcComplete]);

  return (
    <div className="max-h-[300px] shrink-0 overflow-y-auto">
      <form className="payment-details-wrap">
        <div className="payment-left-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">
            Review your cart
          </h1>
          <div className="flex flex-col gap-[4px] mt-[9px]">
            <h1 className="jaldi text-[20px] text-[#003049] font-medium">
              Tax filing one-time payment
            </h1>
            <p className="jaldi text-[20px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
              Period : {moment(reportingPeriod?.periodStartDate).format("MMMM D, YYYY")} - {moment(reportingPeriod?.periodEndDate).format("MMMM D, YYYY")}
            </p>
            <p className="jaldi text-[20px] text-[#003049]">£12.00</p>
          </div>
          <div className="mt-[40px] relative">
            <img src={discount} className="absolute top-[10px] left-[10px]" />
            <input
              placeholder="Discount code"
              className="text-[rgba(6,38,62,0.34)] rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[40px] archivo text-[16px] border border-[1px] border-[#C4C4C4]"
            />
            <p className="font-bold archivo text-[18px] text-[#0D83C1] absolute top-[10px] right-[10px]">
              Apply
            </p>
          </div>
          <div className="mt-[48px] flex flex-col gap-[20px]">
            <div className="flex items-center justify-between">
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                Subtotal
              </p>
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                £ 16.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                VAT
              </p>
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                £ 4.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                Discount
              </p>
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                0
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                Total
              </p>
              <p className="jaldi text-[22px]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
                £ 20.00
              </p>
            </div>
          </div>
        </div>
        <div className="payment-right-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">Pay</h1>
          <div>
            <p className="jaldi text-[20px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
              Email
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px] border border-[1px] border-[#C4C4C4]  ${showError && !email ? "border border-[2px] border-[#D3984E]" : "border border-[1px] border-[#C4C4C4]"}`}
            />
          </div>
          <div className="mt-[20px]">
            <p className="jaldi text-[20px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
              Card Information
            </p>
            <div >
              <CardNumberElement
                options={{
                  style: { base: { fontSize: "16px" } },
                }}
                className={`border p-2  w-full h-[45px] border border-[1px] border-[#C4C4C4] jaldi rounded-tl-[4px] rounded-tr-[4px] ${showError && !cardNumberComplete ? "border border-[2px] border-[#D3984E]" : "border border-[1px] border-[#C4C4C4]"}`}
                onChange={(event) => handleCardChange(event, "cardNumber")}
              />

              <div className="flex">
                <div className="flex-1">
                  <CardExpiryElement
                    options={{
                      style: { base: { fontSize: "16px" } },
                    }}
                    className={`border-l border-r border-b border-t-0 p-2  w-full h-[40px]  border border-[1px] border-[#C4C4C4] jaldi ${showError && !expiryComplete ? "border-l-[2px] border-r-[2px] border-b-[2px]  border-[#D3984E]" : "border border-[1px] border-[#C4C4C4]"} ${showError && !expiryComplete && cardNumberComplete ? "border-t-[1px]" : "border-t-0"}`}
                    onChange={(event) => handleCardChange(event, "expiry")}
                  />
                </div>

                <div className="flex-1">
                  <CardCvcElement
                    options={{
                      style: { base: { fontSize: "16px" } },
                    }}
                    className={`border-l border-r border-b border-t-0 p-2 w-full h-[40px]  border border-[1px] border-[#C4C4C4] jaldi ${showError && !cvcComplete ? "border-r-[2px] border-b-[2px]   border-[#D3984E]" : "border border-[1px] border-[#C4C4C4]"} ${showError && !cvcComplete && cardNumberComplete ? "border-t-[1px]" : "border-t-0"}`}
                    onChange={(event) => handleCardChange(event, "cvc")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <p className="jaldi text-[20px]" style={{ color: "rgba(0, 48, 73, 0.61)" }}>
              Cardholder name
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name on card"
              className={`rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px]  ${showError && !name ? "border border-[2px] border-[#D3984E]" : "border border-[1px] border-[#C4C4C4]"}`}
            />
          </div>
          <div className="flex items-center gap-[30px] mt-[35px]">
            <p className="archivo text-[12px] leading-[16px]" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
              Powered by Stripe
            </p>
            <div className="flex items-center gap-[12px]">
              <p className="archivo text-[12px] leading-[16px]" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
                Terms
              </p>
              <p className="archivo text-[12px] leading-[16px]" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
                Privacy
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


const SubmitCard = ({ setShowLoginDialog, user, showLoginDialog }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [check, setCheck] = useState(false);
  const [triggerPayment, setTriggerPayment] = useState(false);

  return (
    <div className="card-positioning-wrap">
      <Progress title="73% complete" width="73%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Checkout</h1>
          <p className="form-sub-title">
            Once you have paid for TaxReady.co.uk services you will be able to
            download and submit your return to the HMRC.
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            setLoading={setLoading}
            user={user}
            setSuccess={setSuccess}
            triggerPayment={triggerPayment}
            success={success}
            check={check}
            showError={showError}
            showLoginDialog={showLoginDialog}
          />
        </Elements>
        <div className="mt-[40px] flex items-center gap-[12px] justify-center">
          <div className="relative">
            <input
              type="checkbox"
              id="customCheck"
              checked={check}
              onChange={(e) => setCheck(e.target.checked)}
              className={`
         peer
      appearance-none 
      h-[21px] w-[21px] 
      border rounded-sm
      ${showError && !check ? "border-[2px] border-[#D3984E]" : "border border-[#C4C4C4]"}
      checked:bg-[#4A90E2]
      checked:border-[#4A90E2]
      cursor-pointer
    `}
            />
            <span
              className={`
      pointer-events-none absolute left-[4px] top-[1px] text-white text-[14px]
      hidden peer-checked:block
    `}
            >
              ✓
            </span>
          </div>
          <p className="text-center archivo text-[16px] text-[#003049]" style={{ color: "rgba(6, 38, 62, 0.42)" }}>
            I agree to the <span className="underline">Terms & Conditions</span> Find out how we use and protect your data in our <span className="underline">Privacy Policy</span>.
          </p>
        </div>
        {showError && (!check || !success) && (
          <p className="archivo text-[16px] text-[#D3984E] text-end">
            Please enter credit card information and accept the Agreement & Terms
          </p>
        )}
        <div className="card-button-wrap">
          <button
            className="back form-back-button"
            onClick={() => navigate("/review")}
          >
            Back
          </button>
          <button
            className={`next-btn active-color form-next-button ${(!success || loading) && "opacity-[.5]"} ${!success || loading ? "cursor-not-allowed" : "pointer"}`}
            onClick={() => {
              if (!Object.keys(user).length) {
                setShowLoginDialog(true)
                return
              }
              if (!success || !check) {
                setShowError(true);
              } else {
                if (!loading) {
                  setTriggerPayment(true);
                }
              }
            }}
          >
            <p className={`${!success || loading ? "cursor-not-allowed" : "pointer"}`}>
              {loading ? "Loading..." : "Pay Now"}
            </p>
            {!loading && <img src={buttonArrow} style={{ marginTop: "6px" }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitCard;
