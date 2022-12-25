import React from "react";

export default function NavItem({ isVisible, name, link, f }) {
	return (
		<li
			onClick={() => {
				f(false);
			}}
			className={`flex cursor-pointer bg-neutral-800  transition-colors lg:justify-center lg:hover:bg-neutral-600 ${
				isVisible && "bg-gradient-to-r from-pink-500 to-violet-500"
			}`}
		>
			<a
				className="w-full p-1 pl-2 text-left font-semibold lg:w-24 lg:p-1 lg:pl-1 lg:text-center"
				href={`#${link}`}
			>
				{name}
			</a>
		</li>
	);
}
