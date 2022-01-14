import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect(theme) {
  const [proficiency, setProficiency] = React.useState("");

  const handleChange = (event) => {
    setProficiency(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="proficiency-select-label" sx={{ color: "white" }}>
          Poziom zaawansowania
        </InputLabel>
        <Select
          labelId="proficiency-select-label"
          id="proficiency-select"
          value={proficiency}
          label="Proficiency"
          onChange={handleChange}
          size="small"
        >
          
          <MenuItem value={"Pro 1"}>Początkujący</MenuItem>
          <MenuItem value={"Pro 2"}>Średni</MenuItem>
          <MenuItem value={"Pro 3"}>Specjalista</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
