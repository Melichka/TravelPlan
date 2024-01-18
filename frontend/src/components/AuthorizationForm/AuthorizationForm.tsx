import React, { Children } from "react";
import { PropsWithChildren } from "react";
import { SignInSwitcher } from "../SignInSwitcher";
import { SignUpSwitcher } from "../SignUpSwitcher";
import { LogIn } from "../LogIn";
import { Password } from "../Password";
import { SubmitButton } from "../SubmitButton";
import { Typography } from "@mui/material";
import { VARIANTS } from "../../pages/signIn/constants";
import styles from "./styles.module.scss";

type Props = PropsWithChildren<{
  formSwitch: boolean;
  setFormSwitch: (value: boolean) => void;
}>;

export const AuthorizationForm: React.FC<Props> = ({
  children,
  formSwitch,
  setFormSwitch,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.switcher}>
        <SignInSwitcher isActiveSwitcher={formSwitch === true} onClick={() => setFormSwitch(true)}/>
        <SignUpSwitcher isActiveSwitcher={formSwitch === false} onClick={() => setFormSwitch(false)} />
      </div>
      <div className={styles.field}>{children}</div>
      <SubmitButton />
      <div className={styles.bottom}>
        <Typography className={styles.text}>{VARIANTS}</Typography>
        <div className={styles.alternative}>
          <div className={styles.instagram}> </div>
          <div className={styles.google}></div>
          <div className={styles.vk}></div>
        </div>
      </div>
    </div>
  );
};
