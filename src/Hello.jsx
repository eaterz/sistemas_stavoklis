function Hello() {
  const [text, setText] = useState("");

  function handleText(niga) {
    setText(niga.target.value);
  }
  return (
    <div>
      <input id="numberInput" type="text" value={text} onChange={handleText} />
      <h1>hi,{text} </h1>
    </div>
  );
}

export default Hello;
