import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<div className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between border-b border-gray-500 bg-black p-4 text-white md:p-8">
			<div
				to=""
				className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent"
			>
				Inderpreet
			</div>
			<ul className="flex gap-2 md:flex md:gap-20">
				<li className="flex cursor-pointer justify-center  rounded bg-neutral-800 transition-colors hover:bg-rose-500">
					<a className="text-center md:w-24 md:p-1" href="#home">
						About me
					</a>
				</li>
				<li className="flex cursor-pointer justify-center rounded bg-neutral-800 transition-colors hover:bg-amber-500">
					<a className="text-center md:w-24 md:p-1" href="#skills">
						Skills
					</a>
				</li>
				<li className="flex cursor-pointer justify-center rounded bg-neutral-800 transition-colors hover:bg-emerald-500">
					<a className="text-center md:w-24 md:p-1" href="#projects">
						Projects
					</a>
				</li>
			</ul>
			<a
				href="#contactme"
				className={`${
					location.pathname === "/contactme" ? "invisible md:visible" : ""
				} group fixed bottom-16 right-8 z-20 md:visible md:relative md:bottom-auto md:right-auto`}
			>
				<span className="group:duration-200 absolute -inset-2 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-2.5"></span>
				<div
					to="contactme"
					className="relative rounded bg-black p-3 font-semibold text-gray-300 group-hover:text-white"
				>
					Contact me
				</div>
			</a>
		</div>
	);
}
