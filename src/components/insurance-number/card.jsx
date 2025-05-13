import React from "react";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import error from "../../assets/nino-error.svg";
import buttonArrow from "../../assets/arrow-right-button.png";
import { setupGetCalculationId } from "../../global-redux/reducers/tax/slice"
import { useDispatch, useSelector } from "react-redux";
import { collectGovClientHeaders } from "../../config/helpers"

const Card = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, isNinoInCorrect, token, hmrc } = useSelector((state) => state?.tax)
    const [nino, setNino] = React.useState(sessionStorage.getItem("nino") || "");
    const [headers, setHeaders] = React.useState({})

    const handleApiCall = async (value) => {
        dispatch(setupGetCalculationId({ token, nino: value, headerDto: headers }))
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setNino(value);
        if (value.length >= 9) {
            handleApiCall(value);
        }
    };

    React.useEffect(() => {
        sessionStorage.setItem("nino", nino)
    }, [nino])

    React.useEffect(() => {
        const getHeaders = async () => {
            const headers = await collectGovClientHeaders("");
            setHeaders(headers)
        }
        getHeaders()
    }, [])

    return (
        <div className="card-positioning-wrap">
            <Progress title="18% complete" width="18%" />
            <div className="main-card-wrap">
                <div style={{ flex: 1 }}>
                    <h1 className="form-title">Enter National Insurance Number (Nino)</h1>
                    <p className="form-sub-title">
                        For identity verification purposes, please enter the national insurance number associated with the HMRC account you just logged into.
                    </p>
                    <div className="mt-[45px]">
                        <p className="archivo text-[24px] text-[#06263E]">National Insurance Number (NINO)</p>
                        <div className="relative">
                            <input
                                className="mt-[10px] border archivo border-[1px] px-[20px] border-[#C4C4C4] rounded-[8px] h-[51px] w-[100%]"
                                value={nino}
                                onChange={handleChange}
                            />
                            {isNinoInCorrect && (
                                <img src={error} className="absolute top-[17px] right-[20px]" />
                            )}
                        </div>
                    </div>
                </div>
                {isNinoInCorrect && (
                    <p className="archivo text-[24px] text-[#D3984E] mt-[23px]">
                        This National Insurance Number does not match the HMRC account you are currently logged into. Please enter the correct number or go back to log into the appropriate HMRC account.
                    </p>
                )}
                <div className="card-button-wrap mt-40">
                    <button
                        className="back form-back-button"
                        onClick={() => navigate("/access-detail")}
                    >
                        Back
                    </button>
                    <button
                        className={`next-btn ${Object.keys(hmrc).length && "form-next-button active-color text-[24px]"}`}
                        style={{ cursor: Object.keys(hmrc).length ? "pointer" : "not-allowed" }}
                        onClick={() => Object.keys(hmrc).length && navigate("/confirm-detail")}
                    >
                        <p>{!loading ? "Next" : "Loading..."}</p>
                        {!loading && <img src={buttonArrow} className="w-[24px] h-[24px]" style={{ marginTop: "6px" }} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
