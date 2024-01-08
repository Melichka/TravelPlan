import React from "react";

import { SignInButton } from "../../components/SignInButton";
import { SupportButton } from "../../components/SupportButton";

import "./styles.css";
import { HeaderTitle } from "../../components/HeaderTitle";

export const CityPage = () => {
  return (
    <div className="city-page">
      <div className="city-page-header">
        <div className="city-page-title">
          <HeaderTitle />
        </div>
        <div className="city-page-buttons">
          <SignInButton />
          <SupportButton />
        </div>
      </div>
      <div className="city-page-main">
        <div className="city-page-image"></div>
        <div className="city-page-discription">
          <div className="city-page-buttons">

          </div>
        </div>
      </div>
    </div>
  );
};
