// Styles
import "./styles/app.scss";
// Components
import Song from "./components/Song";
import Player from "./components/Player";
// data
import data from "./data";

function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}

export default App;
