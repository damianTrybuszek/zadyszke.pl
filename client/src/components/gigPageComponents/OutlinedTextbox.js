import { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class OutlinedText extends Component {
  constructor(props) {
    super(props);
    this.title = "";
  }
  render() {
    return (
      <Box sx={{ border: 1, borderRadius: 3, padding: 1 }}>
        <TextField
          variant="outlined"
          size="small"
          sx={{ label: { color: "white" }, width: 250 }}
          name="title"
          required
          id="title"
          label={this.props.title}
          autoFocus
          onChange={this.props.handleChange}
        />
      </Box>
    );
  }
}

export default OutlinedText;
