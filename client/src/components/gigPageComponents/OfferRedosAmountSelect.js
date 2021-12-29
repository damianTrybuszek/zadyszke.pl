import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OfferRedosAmountSelect(theme) {
  const [amount, setAmount] = React.useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="offer-redos-label" sx={{ color: "white" }}>
          Wybierz
        </InputLabel>
        <Select
          labelId="offer-redos-label"
          id="offer-redos"
          value={amount}
          label="Amount"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Brak</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
