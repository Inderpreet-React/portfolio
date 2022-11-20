import React from "react";

export default function Navbar() {
	return (
		<div className="h-24 flex justify-between p-4 md:p-8 items-center">
			<h1>Inderpreet Singh</h1>
			<ul className="hidden md:flex md:visible gap-20">
				<li>Overview</li>
				<li>About me</li>
				<li>Projects</li>
			</ul>
			<button>Contact me</button>
		</div>
	);
}
