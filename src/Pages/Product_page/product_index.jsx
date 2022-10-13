import {Box, Grid } from "@chakra-ui/react";
import LeftBars from "./leftSidebar";
import { Products } from "./product_page";
import SortDropdown from "./sortDropdown";



function Product_page() {
    <Box>
        <SortDropdown/>
      <Grid templateColumns="0.3fr 1fr" spacing={20} gap={5}>
        <LeftBars />
        <Products />
      </Grid>
    </Box> 
}

export default Product_page;