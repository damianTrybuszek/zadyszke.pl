import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CategorySelect from "./CategorySelect";
import SubcategorySelect from "./SubcategorySelect";
import TagsSelect from "./TagsSelect";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig1 extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      subCategory: "",
      tags: [],
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleSubCategoryChange(event) {
    this.setState({
      subCategory: event.target.value,
    });
  }

  handleTagsChange(event) {
    this.setState({
      tags: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Tytuł
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="title"
                  multiline={true}
                  rows={5}
                  required
                  fullWidth
                  id="title"
                  label="Wykonam / Zaprojektuję / Stworzę..."
                  autoFocus
                  onChange={this.handleTitleChange}
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Kategoria
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <CategorySelect
                  category={this.state.category}
                  handleCategoryChange={this.handleCategoryChange}
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <SubcategorySelect
                  category={this.state.category}
                  subCategory={this.state.subCategory}
                  handleSubCategoryChange={this.handleSubCategoryChange}
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Tagi
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <TagsSelect
                  tags={this.state.tags}
                  handleTagsChange={this.handleTagsChange}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig1;
