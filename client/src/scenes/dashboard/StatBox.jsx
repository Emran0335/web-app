import { IconButton } from "@mui/material";
import React from "react";

const StatBox = ({ title, increase, description, icon }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{increase}</h3>
      <p>{description}</p>
      <IconButton>{icon}</IconButton>
    </div>
  );
};

export default StatBox;
