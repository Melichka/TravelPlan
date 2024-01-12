import React from "react";

import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

import { EntertainmentButton } from "src/components/EntertainmentButton";
import { HeaderTitle } from "src/components/HeaderTitle";
import { HotelButton } from "src/components/HotelButton";
import { SightButton } from "src/components/SightButton";
import { SignInButton } from "src/components/SignInButton";
import { SupportButton } from "src/components/SupportButton";

import { FavoriteBorderTwoToneIconStyles } from "src/pages/citypage/utils";

import "./styles.css";

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
        <div className="city-page-main-card">
          <div className="city-page-main-card-header">
            <div className="city-page-main-card-header-name">
              <h3></h3>
            </div>
            <FavoriteBorderTwoToneIcon sx={FavoriteBorderTwoToneIconStyles()} />
          </div>
          <div className="city-page-main-card-image"></div>
        </div>
        <div className="city-page-description">
          <div className="city-page-description-buttons">
            <div className="city-page-description-sight">
              <SightButton />
            </div>
            <div className="city-page-description-hotel">
              <HotelButton />
            </div>
            <div className="city-page-description-entertainment">
              <EntertainmentButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
