import logo from "./logo.svg";
import { Board } from "./components/Board";
import { MAX_HEIGHT, MAX_WIDTH } from "./config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Board Game Random Map Generator</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Board width={MAX_WIDTH} height={MAX_HEIGHT} />
      </main>
      <footer className="App-footer">Made by GP</footer>
    </div>
  );
}

export default App;
