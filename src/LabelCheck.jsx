import { useState } from "react";

function LabelCheck(props) {
  const [LabCheck, setCheck] = useState(props.LabCheck);

  return (
    <div>
      <input id="numberInput" type="checkbox" checked={LabCheck} />
    </div>
  );
}

export default LabelCheck;
