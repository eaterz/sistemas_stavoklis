import { useState } from "react";

function Hello(props) {
  const [name, setText] = useState(props.name);

  function handleText(niga) {
    setText(niga.target.value);
  }
  return (
    <div>
      <input id="numberInput" type="text" value={name} onChange={handleText} />
      <h1>hi,{name} </h1>
    </div>
  );
}

export default Hello;
