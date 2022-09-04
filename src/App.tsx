import Meter from "./components/Meter";
import ButtonShape from "./components/ButtonShape";
import Maths from "./components/Maths";
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
      <ButtonShape />
      <Maths />
    </div>
  );
}

export default App;
