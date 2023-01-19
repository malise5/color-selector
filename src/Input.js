import "./styles.css";

export default function Input({ colorValue, setColorValue }) {
	return (
		<form className="App" onSubmit={(e) => e.preventDefault()}>
			<label>Add color Name</label>
			<input
				autoFocus
				type="text"
				placeholder="Add color name"
				required
				value={colorValue}
				onChange={(e) => setColorValue(e.target.value)}
			/>
		</form>
	);
}
