import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Body } from "./Pages/Body/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Body />
    </div>
  );
}

export default App;
