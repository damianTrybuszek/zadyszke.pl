import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OfferRedosAmountSelect(props) {
  const redosAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const displayChangesAmount = redosAmount.map((amount) => (
    <MenuItem key={amount} value={amount}>
      {amount}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="offer-redos-label" sx={{ color: "white" }}>
          Wybierz
        </InputLabel>
        <Select
          labelId="offer-redos-label"
          id="offer-redos"
          value={props.changesAmount === 0 ? 0 : props.changesAmount}
          label="Amount"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>Brak</em>
          </MenuItem>
          {displayChangesAmount}
        </Select>
      </FormControl>
    </div>
  );
}
