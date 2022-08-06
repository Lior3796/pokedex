import { FC } from "react";
import Pokegame from "./components/pokegame/Pokegame";
import "./App.css";

const App: FC = () => {
	return (
		<div className="App">
			<h1>Pokedex</h1>
			<div className="App-container">
				<Pokegame />
			</div>
		</div>
	);
};

export default App;
