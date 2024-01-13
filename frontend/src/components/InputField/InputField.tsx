import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import { InputAdornment, TextField } from "@mui/material";

import "./styles.css";

type InputFieldProps = {
  placeholder: string;
  InputProps?: object;
  isLogin?: boolean;
  isPassword?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  InputProps,
  isLogin,
  isPassword,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      className="field"
      type="text"
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 50,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {isLogin && (
              <AccountCircleIcon
                sx={{
                  color: "white",
                }}
              />
            )}
            {isPassword && (
              <LockIcon
                sx={{
                  color: "white",
                }}
              />
            )}
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
