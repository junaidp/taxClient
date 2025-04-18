import React from "react";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import error from "../../assets/nino-error.svg"
import { BASE_URL } from "../../config/constants"
import buttonArrow from "../../assets/user-info/button-arrow.png";
import { handleSetHMRC } from "../../global-redux/reducers/auth/slice"
import axios from "axios";
import { useDispatch } from "react-redux";

const Card = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nino, setNino] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState(false)
    const [enableNextButton, setEnableNextButton] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (nino) {
            const token = sessionStorage.getItem("token") || ""
            try {
                setLoading(true)
                const response = await axios.get(
                    `${BASE_URL}/api/external/individualCalculationsGetId?nino=${nino}&token=${token}&taxYear=2024-25&calculationType=in-year`,
                    {
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                        },
                    }
                );
                setLoading(false)
                if (response.status === 200 || response.status === 201) {
                    setLoading(true)
                    const secondResponse = await axios.get(
                        `${BASE_URL}/api/external/individualCalculations?nino=${nino}&token=${token}&taxYear=2024-25&calculationId=${response?.data?.calculationId}`,
                        {
                            headers: {
                                "ngrok-skip-browser-warning": "true",
                            },
                        }
                    );
                    setErrorMessage(false)
                    setEnableNextButton(true)
                    dispatch(handleSetHMRC(secondResponse?.data));
                    sessionStorage.setItem("hmrc", JSON.stringify(secondResponse?.data));
                    setLoading(false)
                }
            } catch (error) {
                setErrorMessage(true)
                setLoading(false)
            }
        }
    }

    return (
        <div className="card-positioning-wrap">
            <Progress title="18% complete" width="18%" />
            <div className="main-card-wrap">
                <div>
                    <h1 className="form-title">Enter National Insurance Number (Nino)</h1>
                    <p className="form-sub-title">
                        For identity verification purposes, please enter the national insurance number associated with the HMRC account you just logged into.
                    </p>
                </div>
                <form className="mt-[45px]" onSubmit={handleSubmit}>
                    <p className="archivo text-[24px] text-[#06263E]">National Insurance Number (NINO)</p>
                    <div className="relative">
                        <input className="mt-[10px] border archivo border-[1px] px-[20px] border-[#C4C4C4] rounded-[8px] h-[51px] w-[100%]" onChange={(e) => setNino(e.target.value)} />
                        {
                            errorMessage &&
                            <img src={error} className="absolute top-[17px] right-[20px]" />
                        }
                    </div>
                </form>
                {errorMessage &&
                    <p className="archivo text-[24px] text-[#D3984E] mt-[23px]">This National Insurance Number does not match the HMRC account you are currently logged into. Please enter the correct number or go back to log into the appropriate HMRC account.</p>
                }
                <div className="card-button-wrap mt-40">
                    <button
                        className="back form-back-button"
                        onClick={() => navigate("/access-detail")}
                    >
                        Back
                    </button>
                    <button
                        className={`next-btn  ${enableNextButton && "form-next-button active-color text-[24px]"
                            }`}
                        style={{ cursor: enableNextButton ? "pointer" : "not-allowed" }}
                        onClick={() =>
                            enableNextButton &&
                            navigate(
                                "/confirm-detail"
                            )
                        }
                    >
                        <p>{!loading ? "Next" : "Loading..."}</p>
                        {
                            !loading &&
                            <img src={buttonArrow} className="w-[24px] h-[24px]" style={{ marginTop: "6px" }} />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
