import "./App.css";
import { Products } from "./Pages/Product_page/product_page";
import {LeftBars} from "./Pages/product_page/leftSidebar";
import { Grid } from '@chakra-ui/react'
import SortDropdown from "./Pages/Product_page/sortDropdown";
function App() {
  return (
    <div className="App">
      <SortDropdown/>
      <Grid templateColumns="0.3fr 1fr" spacing={20} gap={5}>
        <LeftBars />
        <Products />
      </Grid>

    </div>
  );
}

export default App;
