import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import SearchButton from "./SearchButton";
import { Container } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

export default function SearchBar() {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >
        <Item>
          <Box sx={{ bgcolor: "text.primary" }}>
            <Container>
              <TextField
                sx={{ input: { color: "black" } }}
                id="filled-search"
                type="search"
                variant="standard"
                color="warning"
                focused
              />
            </Container>
          </Box>
        </Item>
        <Item>
          <SearchButton />
        </Item>
      </Stack>
    </Box>
  );
}
