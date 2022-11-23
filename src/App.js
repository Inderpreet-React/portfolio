import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import PurpleBlob from "./components/PurpleBlob";
import YellowBlob from "./components/YellowBlob";

function App() {
	return (
		<div className="flex h-screen">
			<Navbar />
			<div className="relative mt-24 flex flex-grow overflow-hidden bg-neutral-900 text-white">
				<AboutMe />
				<PurpleBlob />
				<YellowBlob />
			</div>
		</div>
	);
}

export default App;
