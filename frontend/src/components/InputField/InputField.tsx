import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import { InputAdornment, TextField } from "@mui/material";

import { IconStyles } from "./utils";

import styles from "./styles.module.scss";

type InputFieldProps = {
  placeholder: string;
  isLogin?: boolean;
  isPassword?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  isLogin,
  isPassword,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      className={styles.field}
      type="text"
      fullWidth
      variant="standard"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            {isLogin && <AccountCircleIcon sx={IconStyles()} />}
            {isPassword && <LockIcon sx={IconStyles()} />}
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
