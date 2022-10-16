import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Body } from "./Pages/Body/Body";
import Cartpage from "./Pages/Body/CartPage"
import CheckoutPage from "./Pages/Body/CheckOut";

function App() {
  return (
    <div className="App">
    <Cartpage/>

    </div>
  );
}

export default App;
