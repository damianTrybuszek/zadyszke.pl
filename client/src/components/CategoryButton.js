import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CatButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "2px 6px",
  border: "1px solid",
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  color: theme.palette.primary.orange,
}));

export default function CategoryButton(props) {
  return (
    <CatButton size="small" variant="outlined">
      {props.categoryName}
    </CatButton>
  );
}
