import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Homepage } from "./Pages/Body/Homepage";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
