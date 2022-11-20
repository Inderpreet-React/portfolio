import React from "react";

export default function Navbar() {
	return (
		<div className="flex h-24 items-center justify-between p-4 md:p-8">
			<h1>Inderpreet Singh</h1>
			<ul className="hidden gap-20 md:visible md:flex">
				<li>Overview</li>
				<li>About me</li>
				<li>Projects</li>
			</ul>
			<button>Contact me</button>
		</div>
	);
}
