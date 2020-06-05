import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = (state) => {
		setIsModalOpen(state);
	};

	return (
		<div className="App">
			<button onClick={() => toggleModal(true)}>Open modal</button>
			<Modal
        isOpen={isModalOpen}
				onRequestClose={() => toggleModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.9)',
					},
					content: {
						color: "#cccccc",
					},
				}}
			>
				<h1>Modal</h1>
				<h4>This is a modal!</h4>
				<button onClick={() => toggleModal(false)}>Close modal</button>
			</Modal>
		</div>
	);
}

export default App;
