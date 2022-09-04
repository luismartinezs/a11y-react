import Meter from "./components/Meter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Meter
        label="Fuel level:"
        id="fuel"
        value={50}
        min={0}
        max={100}
        high={80}
        low={20}
        optimum={60}
      >
        at 50/100
      </Meter>
    </div>
  );
}

export default App;
