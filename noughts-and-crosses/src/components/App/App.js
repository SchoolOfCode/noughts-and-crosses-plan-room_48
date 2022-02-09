import "./App.css";
import Board from "../Board";
import { useState } from "react";

function App() {
	const [square, setSquare] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	]);

	function onClick() {}

	return (
		<div className="App">
			<h1>Noughts and Crosses</h1>
			<Board />
		</div>
	);
}

export default App;
