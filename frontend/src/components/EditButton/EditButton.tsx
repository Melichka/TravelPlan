import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export function EditButton(props) {
  return (
    <IconButton aria-label="edit" onClick={props.onClick} style={{ color: "white" }}>
      <EditIcon />
    </IconButton>
  );
}
