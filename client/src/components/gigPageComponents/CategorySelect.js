import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect(props) {
  const categories = [
    "",
    "Projektowanie Logo",
    "Sztuka",
    "Muzyka",
    "Projektowanie Stron",
    "Programowanie",
    "Boty komputerowe",
    "Przepisywanie PDF",
    "Grafika komputerowa",
    "Inne",
  ].sort();

  const displayCategories = categories.map((category) => (
    <MenuItem key={category} value={category}>
      {category}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="category-select-label" sx={{ color: "white" }}>
          Wybierz kategorię
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={props.category === "" ? "" : props.category}
          label="Category"
          onChange={props.handleCategoryChange}
        >
          {displayCategories}
        </Select>
      </FormControl>
    </div>
  );
}
