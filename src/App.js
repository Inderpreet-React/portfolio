import Navbar from "./components/Navbar";
import AnimatedPages from "./AnimatedPages";

function App() {
	return (
		<div className="">
			<div className="flex h-screen flex-col">
				<Navbar />
				<AnimatedPages />
			</div>
		</div>
	);
}

export default App;
