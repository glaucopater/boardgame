import logo from "./logo.svg";
import { Board } from "./components/Board";
import { MAX_HEIGHT, MAX_WIDTH } from "./config";
import "./App.css";
import { description, url, version } from "../package.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{description}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Board width={MAX_WIDTH} height={MAX_HEIGHT} />
      </main>
      <footer className="App-footer">
        Ver. {version} -  {new Date().getFullYear()} - (<a href={url}> Source </a>)
      </footer>
    </div>
  );
}

export default App;
