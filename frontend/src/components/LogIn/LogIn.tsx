import React from "react";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { TextField } from "@mui/material";

import { LOGIN } from "./constants";

import "./styles.css";

export const LogIn = () => {
  return (
    <div className="login-field">
      <TextField
        placeholder={LOGIN}
        className="text-field"

        type="text"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 50, // Установка радиуса в 50
          },
        }}
        InputProps={{
          startAdornment: (
            <PermIdentityIcon
              sx={{
                color: "white",
              }}
            />
          ),
        }}
      />
    </div>
  );
};
