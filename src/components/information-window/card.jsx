import React from "react";
import buttonArrow from "../../assets/arrow-right-button.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const navigate = useNavigate();
    return (
        <div className="card-positioning-wrap">
            <Progress title="45% complete" width="45%" />
            <div className="main-card-wrap">
                <div>
                    <h1 className="form-title">You will now be guided through separate questions for each business service you selected</h1>
                    <p className="form-sub-title" style={{marginTop:'20px'}}>
                        Since you selected multiple service types we will now guide you through completing information for each service type. . You will still be completing one final return but each service type will be recorded separately within the app for your convience.
                    </p>
                </div>

                <div className="card-button-wrap mt-40">
                    <button
                        className="back form-back-button"
                        onClick={() => navigate("/business-types")}
                    >
                        Back
                    </button>
                    <button
                        className="next-btn active-color form-next-button"
                        onClick={() => navigate("/employ-people")}
                    >
                        <p>Next</p>
                        <img src={buttonArrow} />
                    </button>{" "}
                </div>
            </div>
        </div>
    );
};

export default Card;
