import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import ScrollDown from "./components/ScrollDown";
import { useRef } from "react";
import { useInView } from "framer-motion";

function App() {
	const isAboutMeRef = useRef(null);
	const isAboutMeVisible = useInView(isAboutMeRef);
	const isSkillsRef = useRef(null);
	const isSkillsVisible = useInView(isSkillsRef);
	const isProjectRef = useRef(null);
	const isProjectVisible = useInView(isProjectRef);

	return (
		<div className="scroll-smooth">
			<div className="flex h-full min-h-screen flex-col divide-y divide-neutral-500 overflow-hidden">
				<ScrollDown />
				<Navbar
					isAboutMeVisible={isAboutMeVisible}
					isSkillsVisible={isSkillsVisible}
					isProjectVisible={isProjectVisible}
				/>
				{/* <AnimatedPages /> */}
				<AboutMe isAboutMeRef={isAboutMeRef} />
				<Skills isSkillsRef={isSkillsRef} />
				<Projects isProjectRef={isProjectRef} />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
