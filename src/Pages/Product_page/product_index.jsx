import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import {SortContext}  from "../../Components/Cotext";
import LeftBars from "./leftSidebar";
import { Products } from "./product_page1";
import SortDropdown from "./sortDropdown";

function Product_page_new({ order_new }) {
  const [user, setUser] = useState("");
  const changeOrder = (new_user) => {
    setUser(new_user);
  }
  return (
    <SortContext.Provider value={{user,changeOrder}}>
      <Box mt="150px">
        <SortDropdown order_set={user}  changeOrder={changeOrder}/>
        <Grid templateColumns="0.3fr 1fr" spacing={20} gap={5}>
          <LeftBars order_set={user}  changeOrder={changeOrder}/>
          <Products />
        </Grid>
      </Box>
    </SortContext.Provider>
  );
}

export default Product_page_new;
