import React from "react";

export default function NavItem({ isVisible, name, link }) {
	return (
		<li
			className={`flex cursor-pointer justify-center  bg-neutral-800 transition-colors lg:hover:bg-neutral-600 ${
				isVisible && "bg-gradient-to-r from-pink-500 to-violet-500"
			}`}
		>
			<a
				className="p-1 text-center font-semibold lg:w-24 lg:p-1"
				href={`#${link}`}
			>
				{name}
			</a>
		</li>
	);
}