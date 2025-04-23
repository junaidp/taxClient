import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import buttonArrow from "../../assets/arrow-right-button.png";
import Progress from "../common/progress";
import discount from "../../assets/discount.svg";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51L3igsAX34JgbNaA4c0rd2PAl8EayvBReK9w2M1yp3Ep8Mlz29MkPvMzHgVfS17dGsQ3nVQs9da8kwBtDxm8lx4S00VxEkycWL"
);

const CheckoutForm = ({
  setLoading,
  setSuccess,
  triggerPayment,
  success,
  check,
}) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isCardComplete, setIsCardComplete] = useState(false);

  const handleCardChange = (event) => {
    if (event.complete) {
      setIsCardComplete(true);
    }
  };

  const handlePayment = async () => {
    if (!stripe || !elements) return;

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
        card: elements.getElement(CardElement),
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
  }, [triggerPayment]);

  React.useEffect(() => {
    if (name && email && isCardComplete && check) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [name, email, isCardComplete, check]);

  return (
    <div>
      <form className="payment-details-wrap">
        <div className="payment-left-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">
            Review your cart
          </h1>
          <div className="flex flex-col gap-[4px] mt-[9px]">
            <h1 className="jaldi text-[20px] text-[#003049] font-medium">
              Tax filing one-time payment
            </h1>
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Period : April 1, 2024 to June 31, 2025
            </p>
            <p className="jaldi text-[20px]  text-[#003049]">£12.00</p>
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
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Subtotal
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 16.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                VAT
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 4.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Discount
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                0
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Total
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 20.00{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="payment-right-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">Pay</h1>{" "}
          <div>
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Email
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px] border border-[1px] border-[#C4C4C4]"
            />
          </div>
          <div className="mt-[20px]">
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Card Information
            </p>
            <div className="payment-card-overlay">
              <div className="card-element h-[50px]">
                <CardElement
                  options={{ style: { base: { fontSize: "16px" } } }}
                  onChange={handleCardChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Cardholder name
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name on card"
              className=" rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px] border border-[1px] border-[#C4C4C4]"
            />
          </div>
          <div className="flex items-center gap-[30px] mt-[35px]">
            <p
              className="archivo text-[12px] leading-[16px]"
              style={{ color: "rgba(26, 26, 26, 0.5)" }}
            >
              Powered by Stripe{" "}
            </p>
            <div className="flex items-center gap-[12px]">
              <p
                className="archivo text-[12px] leading-[16px]"
                style={{ color: "rgba(26, 26, 26, 0.5)" }}
              >
                Terms
              </p>
              <p
                className="archivo text-[12px] leading-[16px]"
                style={{ color: "rgba(26, 26, 26, 0.5)" }}
              >
                Privacy
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const SubmitCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const [triggerPayment, setTriggerPayment] = React.useState(false);

  return (
    <div className="card-positioning-wrap">
      <Progress title="73% complete" width="73%" />

      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Pay & Submit</h1>
          <p className="form-sub-title">
            Once you have paid for TaxReady.co.uk services you will be able to
            download and submit your return to the HMRC.
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            setLoading={setLoading}
            setSuccess={setSuccess}
            triggerPayment={triggerPayment}
            success={success}
            check={check}
          />
        </Elements>

        <div className="mt-[40px] flex items-center gap-[12px] justify-center">
          <input
            type="checkbox"
            className="h-[12px] w-[12px] border border-[2px] border-[#FFFFFF]"
            value={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <p
            className="text-center archivo text-[16px] text-[#003049]"
            style={{ color: "rgba(6, 38, 62, 0.42)" }}
          >
            I agree to the <span className="underline">Terms & Conditions</span>{" "}
            Find out how we use and protect your data in our{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
        </div>
        <div className="mt-[40px] mb-[10px]"></div>
        {showError && (!check || !success) && (
          <p className="archivo text-[16px] text-[#D3984E] text-end">
            Please enter credit card information and accept the Agreement &
            Terms
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
            className={`next-btn active-color form-next-button ${
              (!success || loading) && "opacity-[.5]"
            } ${!success || loading ? "cursor-not-allowed" : "pointer"}`}
            onClick={() => {
              if (!success) {
                setShowError(true);
              } else {
                if (!loading) {
                  setTriggerPayment(true);
                }
              }
            }}
          >
            <p
              className={` ${
                !success || loading ? "cursor-not-allowed" : "pointer"
              }`}
            >
              {loading ? "Loading..." : "Pay Now"}
            </p>
            {!loading && <img src={buttonArrow} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitCard;
