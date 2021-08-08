import "./App.css";
import RickAndMortyApi from "./components/RickAndMortyApi";

function App() {
  return (
    <div style={{ background: "#24272D", minHeight: "100vh" }}>
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "3rem",
          padding: ".3rem",
        }}
      >
        <h2>Rick and Morty</h2>
      </div>

      <RickAndMortyApi />
    </div>
  );
}

export default App;
