import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import PurpleBlob from "./components/PurpleBlob";
import YellowBlob from "./components/YellowBlob";
import ContactMe from "./components/ContactMe";

function App() {
	return (
		<>
			<div className="flex h-screen flex-col">
				<Navbar />
				<div className="relative mt-24 flex flex-grow flex-col overflow-hidden bg-neutral-900 text-white">
					<AboutMe />
					<PurpleBlob />
					<YellowBlob />
				</div>
			</div>
			<ContactMe />
		</>
	);
}

export default App;
