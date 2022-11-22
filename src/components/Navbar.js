import React from "react";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 flex h-24 w-full items-center justify-between border-b border-gray-500 bg-black p-4 text-white md:p-8">
			<h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent">
				Inderpreet
			</h1>
			<ul className="hidden gap-20 md:visible md:flex">
				<li className="cursor-pointer rounded bg-gray-800 p-2 opacity-80 transition-colors hover:bg-rose-500 hover:opacity-100">
					<div className="text-sm font-semibold text-white">About me</div>
				</li>
				<li className="cursor-pointer rounded bg-gray-800 p-2 opacity-80 transition-colors hover:bg-amber-500 hover:opacity-100">
					<div className="text-sm font-semibold text-white">Skills</div>
				</li>
				<li className="cursor-pointer rounded bg-gray-800 p-2 opacity-80 transition-colors hover:bg-emerald-500 hover:opacity-100">
					<div className="text-sm font-semibold text-white">Projects</div>
				</li>
			</ul>
			<div className="group relative">
				<span className="group:duration-200 absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-1"></span>
				<button className="relative rounded bg-black p-3 text-gray-300 group-hover:text-white">
					Contact me
				</button>
			</div>
		</div>
	);
}
