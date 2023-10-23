import { useState } from "react";
import "./Counter.css";
function Counter(props) {
  const [number, setNumber] = useState(props.number);
  const [multiplier, setMultiplier] = useState(1);
  const [delta, setDelta] = useState(1);

  function addDelta() {
    setNumber(number + parseInt(delta));
  }
  function minusDelta() {
    setNumber(number - parseInt(delta));
  }
  function multiply() {
    setNumber(number * multiplier);
  }
  function handleChange(reiz) {
    setMultiplier(reiz.target.value);
  }
  function handleDelta(event) {
    setDelta(event.target.value);
  }

  return (
    <div>
      <div className="kvad">
        <input
          id="numberInput"
          type="number"
          value={delta}
          onChange={handleDelta}
        />

        <div className="row">
          <button className="buttonPlus" onClick={addDelta}>
            + {delta}
          </button>
          <button className="buttonMinus" onClick={minusDelta}>
            - {delta}
          </button>
        </div>

        <h1>{number}</h1>

        <input
          id="numberInput"
          type="number"
          value={multiplier}
          onChange={handleChange}
        />
        <div className="row">
          <button className="buttonReiz" onClick={multiply}>
            *{multiplier}
          </button>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}
export default Counter;
