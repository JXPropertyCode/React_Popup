import Popup from "./components/Popup";
import { useState, useEffect } from 'react'

function App() {
	const [buttonPopup, setButtonPopup] = useState(false)
	
	return (
		<div>
			{/* this main would have css assinged to it */}
			<main>
				<h1>React Popups</h1>
				<br></br>
				<button onClick={() => setButtonPopup(true)}>Open Popup</button>
			</main>

			<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
				<h3>My Popup</h3>
				<p>This is my button triggered popup</p>
			</Popup>

		</div>
	);
}

export default App;
