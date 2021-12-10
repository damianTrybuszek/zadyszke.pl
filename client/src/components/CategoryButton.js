import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CatButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "2px 6px",
  border: "1px solid",
  lineHeight: 1,
  borderColor: "#ED8627",
  fontFamily: ["Poppins", "sans-serif"],
});

export default function CategoryButton(props) {
  return (
    <CatButton size="small" variant="outlined">
      {props.categoryName}
    </CatButton>
  );
}
