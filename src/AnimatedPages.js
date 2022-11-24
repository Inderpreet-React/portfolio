import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

export default function AnimatedPages() {
	return (
		<Routes>
			<Route path="/" element={<AboutMe />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="contactme" element={<ContactMe />} />
		</Routes>
	);
}
