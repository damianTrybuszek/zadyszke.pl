import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../ui/style.css";
import { Opacity } from "@mui/icons-material";

export default function CategorySelect(theme) {
  const [specialisation, setSpecialisation] = React.useState("");

  const handleChange = (event) => {
    setSpecialisation(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel did="specialisation-select-label" sx={{ color: "white" }}>
          Wybierz z listy
        </InputLabel>
        <Select
          labelId="specialisation-select-label"
          id="specialisation-select"
          value={specialisation}
          label="Specialisation"
          onChange={handleChange}
          size="small"
        >
          <div style={{backgroundColor: '#2F303A'}}>
            <MenuItem value={"Spec 1"}>Programista</MenuItem>
            <MenuItem value={"Spec 2"}>Grafik</MenuItem>
            <MenuItem value={"Spec 3"}>Konstruktor</MenuItem>
          </div>
        </Select>
      </FormControl>
    </div>
  );
}
