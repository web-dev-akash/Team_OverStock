import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import LeftBars from "./leftSidebar";
import { Products } from "./product_page1";
import SortDropdown from "./sortDropdown";

function Product_page_new() {
  return (
    <Box mt="150px">
      <SortDropdown />
      <Grid templateColumns="0.3fr 1fr" spacing={20} gap={5}>
        <LeftBars />
        <Products />
      </Grid>
    </Box>
  );
}

export default Product_page_new;
