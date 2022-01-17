import { Component } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BasicTextbox = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasicTextbox
        value={this.props.priceValue}
        id="outlined-number"
        label="Price"
        type="Price"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default Price;
