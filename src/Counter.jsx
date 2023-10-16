import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function addOne() {
    setNumber(number + 1);
  }
  function und() {
    setNumber(number - 1);
  }
  return (
    <div>
      <button onClick={addOne}>+ 1</button>
      <button onClick={und}>- 1</button>
      <h1>{number}</h1>
    </div>
  );
}
export default Counter;
