import React from "react";

import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

import { EntertainmentButton } from "../../components/EntertainmentButton";
import { HeaderTitle } from "../../components/HeaderTitle";
import { HotelButton } from "../../components/HotelButton";
import { SightButton } from "../../components/SightButton";
import { SignInButton } from "../../components/SignInButton";
import { SupportButton } from "../../components/SupportButton";

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
            <FavoriteBorderTwoToneIcon
              sx={{
                color: "white",
                fontSize: 40,
              }}
            />
          </div>
          <div className="city-page-main-cadr-image"></div>
        </div>
        <div className="city-page-description">
          <div className="city-page-description-buttons">
            <SightButton />
            <HotelButton />
            <EntertainmentButton />
          </div>
        </div>
      </div>
    </div>
  );
};
