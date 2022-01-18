import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SubcategorySelect(props) {
  const subCategories = new Map();
  subCategories.set("", [""].sort());
  subCategories.set(
    "Projektowanie Logo",
    ["Duże Logo", "Średnie Logo", "Małe logo", "Szkice"].sort()
  );
  subCategories.set("Sztuka", ["Obrazy", "Szkice", "Rysunki"].sort());
  subCategories.set(
    "Muzyka",
    ["Wokale", "Riffy", "Beat'y", "Aranżacje"].sort()
  );
  subCategories.set(
    "Projektowanie Stron",
    ["Małe strony", "Średnie strony", "Duże strony", "E-commerce"].sort()
  );
  subCategories.set(
    "Programowanie",
    ["Skrypty", "CRM", "ERP", "Bazy Danych"].sort()
  );
  subCategories.set(
    "Boty komputerowe",
    ["Discord", "Windows", "Fora internetowe"].sort()
  );
  subCategories.set(
    "Przepisywanie PDF",
    ["Do Excela", "Do Notatnika (.CSV)"].sort()
  );
  subCategories.set(
    "Grafika komputerowa",
    ["Wizualizacje 2D", "Wizualizacje 3D", "Animacje"].sort()
  );
  subCategories.set("Inne", ["Inne"].sort());

  const displaySubCategories = subCategories
    .get(props.category)
    .map((subCategory) => (
      <MenuItem key={subCategory} value={subCategory}>
        {subCategory}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="category-select-label" sx={{ color: "white" }}>
          Wybierz podkategorię
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={props.subCategory === "" ? "" : props.subCategory}
          label="SubCategory"
          onChange={props.handleSubCategoryChange}
        >
          {displaySubCategories}
        </Select>
      </FormControl>
    </div>
  );
}
