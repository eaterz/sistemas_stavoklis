import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./check";
import LabelCheck from "./LabelCheck.jsx";

function App() {
  const allNames = ["Jevgenijs", "Tava Mamma", "Bača"];

  const result = [7, 43, 101];

  const check = [true, true, false];

  const LCheck = [
    { label: "Agree to the Policy", check: true },
    { label: "Receive Offers", check: false },
  ];

  const namesJSX = allNames.map((name, index) => {
    return <Hello name={name} key={index} />;
  });

  const skaitlisJSX = result.map((skaitlis, index) => {
    return <Counter number={skaitlis} key={index} />;
  });

  const checkJSX = check.map((checked, index) => {
    return <Check check={checked} key={index} />;
  });

  const LabelCheckJSX = LCheck.map((checked, index) => {
    return (
      <label>
        {checked.label}
        <LabelCheck LabCheck={checked.check} key={index} />
      </label>
    );
  });
  return (
    <>
      <div className="App">{skaitlisJSX}</div>
      <div className="line"></div>
      <div className="App">{namesJSX}</div>
      <div className="line"></div>
      <div className="App">{checkJSX}</div>
      <div className="line"></div>
      <div className="App">{LabelCheckJSX}</div>
    </>
  );
}

export default App;
