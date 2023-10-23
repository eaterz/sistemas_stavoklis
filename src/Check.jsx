import { useState } from "react";

function Check(props) {
  const [check, setCheck] = useState(props.check);

  return (
    <div>
      <input id="numberInput" type="checkbox" checked={check} />
    </div>
  );
}

export default Check;
