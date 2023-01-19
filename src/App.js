import Input from "./Input";
import Square from "./Square";
import "./styles.css";
import { useState } from "react";

export default function App() {
	const [colorValue, setColorValue] = useState("");
	return (
		<div className="App">
			<Square colorValue={colorValue} />
			<Input colorValue={colorValue} setColorValue={setColorValue} />
		</div>
	);
}
