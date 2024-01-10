import React from "react";

import "./styles.css";
import { HeaderTitle } from "../../components/HeaderTitle";
import { LogIn } from "../../components/LogIn";

export function SignInPage() {
  return (
    <div className="signin-page">
      <div className="signin-page-image">
        <div className="signin-page-image-title">
        <HeaderTitle />
        </div>
      </div>
      <div className="signin-page-main">
        <div className="signin-page-main-switcher">

        </div>
        <div className="signin-page-main-textfield">
          <LogIn />
        </div>
      </div>
    </div>
  );
}
