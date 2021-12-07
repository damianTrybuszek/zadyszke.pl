import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth id="fullWidth" />
    </Box>
  );
}