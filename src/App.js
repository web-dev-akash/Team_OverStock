import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Body } from "./Pages/Body/Body";
import {Cartpage} from "./Pages/CartPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Body />
      <Cartpage/>
    </div>
  );
}

export default App;
