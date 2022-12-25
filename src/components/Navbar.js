import React from "react";
import NavItem from "./NavItem";

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
				<NavItem isVisible={isAboutMeVisible} name="About me" link="aboutme" />
				<NavItem isVisible={isSkillsVisible} name="Skills" link="skills" />
				<NavItem isVisible={isProjectVisible} name="Projects" link="projects" />
				<NavItem
					isVisible={isContactVisible}
					name="Contact me"
					link="contactme"
				/>
			</ul>
		</div>
	);
}
