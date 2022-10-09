import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Body } from "./Pages/Body/Body";
import { Products } from "./Pages/product_page";
import LeftSidebar from "./Pages/leftSidebar";  
import {LeftBars} from "./Pages/leftSidebar";

import { Grid } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Grid templateColumns="0.3fr 1fr" spacing={10}>
        <LeftBars />
        <Products />
      </Grid>

    </div>
  );
}

export default App;
