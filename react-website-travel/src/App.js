import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" exact Component={Home} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
