import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [number, setNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function addOne() {
    setNumber(number + 1);
  }
  function und() {
    setNumber(number - 1);
  }
  function multiply() {
    setNumber(number * multiplier);
  }
  function handleChange(reiz) {
    setMultiplier(reiz.target.value);
  }
  return (
    <div>
      <div className="row">
        <button className="buttonPlus" onClick={addOne}>
          + 1
        </button>
        <button className="buttonMinus" onClick={und}>
          - 1
        </button>
      </div>

      <h1>{number}</h1>

      <input type="number" value={multiplier} onChange={handleChange} />
      <button className="buttonReiz" onClick={multiply}>
        *
      </button>
    </div>
  );
}
export default Counter;
