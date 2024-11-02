import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import { TomatoContainer } from "../../pages/customer_journey/plan_details/journey";
const AppDownload = () => {
  return (
    <TomatoContainer>
      <div className="app-download" id="app-download">
        <p>
          For Better Experience Download <br />
          Tomato App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div></TomatoContainer>
  );
};

export default AppDownload;
