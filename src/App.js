import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import ScrollDown from "./components/ScrollDown";

function App() {
	const isAboutMeVisible = null;
	return (
		<div className="scroll-smooth">
			<div className="flex h-full min-h-screen flex-col">
				<ScrollDown />
				<Navbar />
				{/* <AnimatedPages /> */}
				<AboutMe isAboutMeVisible={isAboutMeVisible} />
				<Skills />
				<Projects />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
