import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Board</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Board width={10} height={10} />
      </main>
    </div>
  );
}

export default App;
