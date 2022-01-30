import { Component } from "react";
import { Container } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NewOfferButton from "./NewOfferButton";
import { Typography } from "@mui/material";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.text.primary,
}));

class OrdersListEmpty extends Component {
  render() {
    return (
      <Container className="offerList">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(15, 1fr)",
            gap: 5,
            gridAutoRows: "repeat(4, 1fr)",
          }}
        >
          <Item sx={{ gridRow: "2", gridColumn: "2/16", display: "grid" }}>
            <Typography variant="h6">
              Wygląda na to, że nie masz jeszcze zamówień.
            </Typography>
          </Item>
          <Item sx={{ gridRow: "3", gridColumn: "8/15", display: "grid" }}>
            {/* <NewOfferButton /> */}
          </Item>
        </Box>
      </Container>
    );
  }
}

export default OrdersListEmpty;
