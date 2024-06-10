import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { IconStyles } from "./utils";
import styles from "./styles.module.scss";

type InputFieldProps = {
  placeholder: string;
  isLogin?: boolean;
  isPassword?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  isLogin,
  isPassword,
  onChange,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      className={styles.field}
      type="text"
      fullWidth
      variant="standard"
      onChange={onChange} // Добавлен обработчик изменений
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            {isLogin && <AccountCircleIcon sx={IconStyles()} />}
            {isPassword && <LockIcon sx={IconStyles()} />}
          </InputAdornment>
        ),
      }}
    />
  );
};
