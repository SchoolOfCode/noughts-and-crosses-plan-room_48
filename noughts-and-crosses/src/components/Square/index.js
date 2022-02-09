// Square
// state - x, o, null
// render - x, o, null
// behaviour - onClick to respond to user selection

import React from "react";
import "./square.css";
import { useState } from "react";

export default function Square({ onClick, value }) {
	return (
		<div className="square-container">
			<div className="button-div">
				<button id="1" onClick={onClick}>
					{value[0]}
				</button>
			</div>
			<div className="button-div">
				<button id="2" onClick={onClick}>
					{value[1]}
				</button>
			</div>
			<div className="button-div">
				<button id="3" onClick={onClick}>
					{value[2]}
				</button>
			</div>
			<div className="button-div">
				<button id="4" onClick={onClick}>
					{value[3]}
				</button>
			</div>
			<div className="button-div">
				<button id="5" onClick={onClick}>
					{value[4]}
				</button>
			</div>
			<div className="button-div">
				<button id="6" onClick={onClick}>
					{value[5]}
				</button>
			</div>
			<div className="button-div">
				<button id="7" onClick={onClick}>
					{value[6]}
				</button>
			</div>
			<div className="button-div">
				<button id="8" onClick={onClick}>
					{value[7]}
				</button>
			</div>
			<div className="button-div">
				<button id="9" onClick={onClick}>
					{value[8]}
				</button>
			</div>
		</div>
	);
}
