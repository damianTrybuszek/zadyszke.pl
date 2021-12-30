import { Component } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

class Price extends Component{
    constructor(props){
        super(props);
        this.price = -1;
    }
    render(){
        return(
            <Box sx={{ border: 1, borderRadius: 3, padding: 1 }}>
                <Typography>
                    {this.props.price} PLN
                </Typography>
            </Box>

        )
    }
}

export default Price;