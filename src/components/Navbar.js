import React from "react";

export default function Navbar({
	isAboutMeVisible,
	isSkillsVisible,
	isProjectVisible,
	isContactVisible,
}) {
	return (
		<div className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between border-b border-gray-500 bg-black p-4 text-white md:p-8">
			<a
				href="#aboutme"
				className="relative text-2xl font-extrabold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
			>
				Inderpreet
			</a>
			<ul className="hidden gap-2 md:flex md:gap-20">
				<li
					className={`flex cursor-pointer justify-center  rounded bg-neutral-800 transition-colors md:hover:bg-amber-500 ${
						isAboutMeVisible && "bg-amber-500 text-gray-700"
					}`}
				>
					<a
						className="p-1 text-center font-semibold md:w-24 md:p-1"
						href="#aboutme"
					>
						About me
					</a>
				</li>
				<li
					className={`flex cursor-pointer justify-center rounded bg-neutral-800 transition-colors md:hover:bg-amber-500 ${
						isSkillsVisible && "bg-amber-500 text-gray-700"
					}`}
				>
					<a
						className="p-1 text-center font-semibold md:w-24 md:p-1"
						href="#skills"
					>
						Skills
					</a>
				</li>
				<li
					className={`flex cursor-pointer justify-center rounded bg-neutral-800 transition-colors md:hover:bg-amber-500 ${
						isProjectVisible && "bg-amber-500 text-gray-700"
					}`}
				>
					<a
						className="p-1 text-center font-semibold md:w-24 md:p-1"
						href="#projects"
					>
						Projects
					</a>
				</li>
				<li
					className={`flex cursor-pointer justify-center rounded bg-neutral-800 transition-colors md:hover:bg-amber-500 ${
						isContactVisible && "bg-amber-500 text-gray-700"
					}`}
				>
					<a
						className="p-1 text-center font-semibold md:w-24 md:p-1"
						href="#contactme"
					>
						Contact me
					</a>
				</li>
			</ul>
		</div>
	);
}
