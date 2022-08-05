import data from "./data/data";
import Pokegame from "./components/pokegame/Pokegame";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Pokedex</h1>
			<div className="App-container">
				<Pokegame />
			</div>
		</div>
	);
}

export default App;
