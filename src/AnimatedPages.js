import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedPages() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<AboutMe />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="contactme" element={<ContactMe />} />
			</Routes>
		</AnimatePresence>
	);
}
