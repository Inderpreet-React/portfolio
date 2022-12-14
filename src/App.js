import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useRef } from "react";
import { useInView } from "framer-motion";

function App() {
	const isAboutMeRef = useRef(null);
	const isAboutMeVisible = useInView(isAboutMeRef);
	const isSkillsRef = useRef(null);
	const isSkillsVisible = useInView(isSkillsRef);
	const isProjectRef = useRef(null);
	const isProjectVisible = useInView(isProjectRef);
	const isContactRef = useRef(null);
	const isContactVisible = useInView(isContactRef);

	return (
		<div className="scroll-smooth">
			<div className="flex h-full min-h-screen flex-col divide-y divide-neutral-500 overflow-hidden">
				<Navbar
					isAboutMeVisible={isAboutMeVisible}
					isSkillsVisible={isSkillsVisible}
					isProjectVisible={isProjectVisible}
					isContactVisible={isContactVisible}
				/>
				<AboutMe isAboutMeRef={isAboutMeRef} />
				<Skills isSkillsRef={isSkillsRef} />
				<Projects isProjectRef={isProjectRef} />
				<ContactMe isContactRef={isContactRef} />
			</div>
		</div>
	);
}

export default App;
