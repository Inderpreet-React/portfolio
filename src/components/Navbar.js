import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<div className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between border-b border-gray-500 bg-black p-4 text-white md:p-8">
			<Link
				to=""
				className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent"
			>
				Inderpreet
			</Link>
			<ul className="flex gap-2 md:flex md:gap-20">
				<li className="flex cursor-pointer rounded  bg-neutral-800 transition-colors hover:bg-rose-500">
					<NavLink
						to=""
						className={({ isActive }) =>
							isActive
								? "flex h-full items-center justify-center rounded bg-rose-500 p-2 text-xs font-semibold text-white opacity-100 md:w-24 md:text-sm"
								: "flex h-full items-center justify-center p-2 text-xs font-semibold text-white opacity-80 md:w-24 md:text-sm"
						}
					>
						About me
					</NavLink>
				</li>
				<li className="flex cursor-pointer rounded bg-neutral-800 transition-colors hover:bg-amber-500">
					<NavLink
						to="skills"
						className={({ isActive }) =>
							isActive
								? "flex h-full items-center justify-center rounded bg-amber-500 p-2 text-xs font-semibold text-white opacity-100 md:w-24 md:text-sm"
								: "flex h-full items-center justify-center p-2 text-xs font-semibold text-white opacity-80 md:w-24 md:text-sm"
						}
					>
						Skills
					</NavLink>
				</li>
				<li className="flex cursor-pointer rounded bg-neutral-800 transition-colors hover:bg-emerald-500">
					<NavLink
						to="projects"
						className={({ isActive }) =>
							isActive
								? "flex h-full items-center justify-center rounded bg-emerald-500 p-2 text-xs font-semibold text-white opacity-100 md:w-24 md:text-sm"
								: "flex h-full items-center justify-center p-2 text-xs font-semibold text-white opacity-80 md:w-24 md:text-sm"
						}
					>
						Projects
					</NavLink>
				</li>
			</ul>
			<div
				className={`${
					location.pathname === "/contactme" ? "invisible md:visible" : ""
				} group fixed bottom-16 right-8 z-20 md:visible md:relative md:bottom-auto md:right-auto`}
			>
				<span className="group:duration-200 absolute -inset-2 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-2.5"></span>
				<NavLink
					to="contactme"
					className="relative rounded bg-black p-3 text-gray-300 group-hover:text-white"
				>
					Contact me
				</NavLink>
			</div>
		</div>
	);
}
