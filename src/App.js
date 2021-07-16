import "./App.css";
import CopyButton from "./components/CopyButton";

function App() {
  const exampleTextOne = "First String";
  const exampleTextTwo = "Second String Second String";
  const exampleTextThree = "123456789";
  return (
    <div className="App">
      <h2>test</h2>
      <p>{exampleTextOne}</p>
      <CopyButton textToCopy={exampleTextOne} />
      <p>{exampleTextTwo}</p>
      <CopyButton textToCopy={exampleTextTwo} />
      <p>{exampleTextThree}</p>
      <CopyButton textToCopy={exampleTextThree} />
      <div>
        <h2>Paste text here!</h2>
        <textarea rows="4" cols="50"></textarea>
      </div>
    </div>
  );
}

export default App;
