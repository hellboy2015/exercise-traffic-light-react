import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");
	let redLight = "rounded-circle bg-danger myLight";
	if (color == "red") {
		redLight += " selected";
	}
	let yellowLight = "rounded-circle bg-warning myLight";
	if (color == "yellow") {
		yellowLight += " selected";
	}
	let greenLight = "rounded-circle bg-success myLight";
	if (color == "green") {
		greenLight += " selected";
	}
	return (
		<div className="container">
			<div className="wire bg-dark"></div>
			<div
				className="trafficLight bg-dark rounded py-1"
				id="myTrafficLight">
				<div className="row justify-content-center">
					<div
						onClick={() => setColor(color == "red" ? "" : "red")}
						className={redLight}></div>
				</div>
				<div className="row justify-content-center">
					<div
						onClick={() =>
							setColor(color == "yellow" ? "" : "yellow")
						}
						className={yellowLight}></div>
				</div>
				<div className="row justify-content-center">
					<div
						onClick={() =>
							setColor(color == "green" ? "" : "green")
						}
						className={greenLight}></div>
				</div>
			</div>
		</div>
	);
}
