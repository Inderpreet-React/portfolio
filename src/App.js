import Navbar from "./components/Navbar";
import AnimatedPages from "./AnimatedPages";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
	return (
		<div className="">
			<div className="flex h-full min-h-screen flex-col">
				<Navbar />
				{/* <AnimatedPages /> */}
				<AboutMe />
				<Skills />
				<Projects />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
