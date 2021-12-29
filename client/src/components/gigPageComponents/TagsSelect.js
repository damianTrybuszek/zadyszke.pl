import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  'Tag 1',
  'Tag 2',
  'Tag 3',
  'Tag 4',
];

function getStyles(tag, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TagsSelect() {
  const theme = useTheme();
  const [tag, setTag] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="multiple-tag-select-label">Tagi</InputLabel>
        <Select
          labelId="multiple-tag-select-label"
          id="multiple-tag-select"
          multiple
          value={tag}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
              style={getStyles(tag, tags, theme)}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
