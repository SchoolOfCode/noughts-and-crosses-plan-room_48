import React from "react";
import { useState } from "react";
import Square from "../Square";

export default function Board() {
	// const [square, setSquare] = useState([
	// 	"x",
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// ]);

	const [buttonId, setButtonId] = useState("");

	const btnArr = ["x", null, null, null, null, null, null, null, null];
	let newArr;
	function onClick(e) {
		console.log("i have been clicked");
		setButtonId(e.target.id - 1);
		console.log(e.target.id - 1);
		//let btnValue = square[buttonId - 1];
		let newArr = [
			...btnArr.slice(0, buttonId),
			"O",
			...btnArr.slice(buttonId + 1),
		];
		return newArr;
	}

	return (
		<div>
			<Square onClick={onClick} value={newArr} />
		</div>
	);
}
