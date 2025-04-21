import React from "react";
import computer from "../../assets/home/computer.svg";
import bars from "../../assets/home/bars.svg";

const Body = () => {
  return (
    <div className="home-body-main-wrap">
      <div className="home-body-wrap">
        <div className="body-text-wrap">
          <img src={bars} className="bars-img" />
          <p>
            TaxReady.co.uk is specifically designed for UK small businesses, offering streamlined tax filing solutions.  The software provides a convenient way to manage and submit your self-assessment tax returns with HMRC for only £12 per filing.
          </p>
          <p>File your taxes within minutes not hours.
          </p>
        </div>
        <div className="body-img-wrap">
          <img src={computer} className="computer-img" />
        </div>
      </div>
      <div className="footer-text-wrap">
        <p className="footer-text">© 2025 TaxReady. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Body;
