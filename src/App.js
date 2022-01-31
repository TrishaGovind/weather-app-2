import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://trisha-govind.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trisha Govind
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TrishaGovind/weather-app-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
