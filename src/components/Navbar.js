import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 z-10 flex h-24 w-full items-center justify-between border-b border-gray-500 bg-black p-4 text-white md:p-8">
			<Link
				to=""
				className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent"
			>
				Inderpreet
			</Link>
			<ul className="hidden gap-20 md:visible md:flex">
				<li className="flex cursor-pointer rounded  bg-neutral-800 transition-colors hover:bg-rose-500">
					<NavLink
						to=""
						className={({ isActive }) =>
							isActive
								? "flex h-full w-24 items-center justify-center rounded bg-rose-500 p-2 text-sm font-semibold text-white opacity-100"
								: "flex h-full w-24 items-center justify-center p-2 text-sm font-semibold text-white opacity-80"
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
								? "flex h-full w-24 items-center justify-center rounded bg-amber-500 p-2 text-sm font-semibold text-white opacity-100"
								: "flex h-full w-24 items-center justify-center p-2 text-sm font-semibold text-white opacity-80"
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
								? "flex h-full w-24 items-center justify-center rounded bg-emerald-500 p-2 text-sm font-semibold text-white opacity-100"
								: "flex h-full w-24 items-center justify-center p-2 text-sm font-semibold text-white opacity-80"
						}
					>
						Projects
					</NavLink>
				</li>
			</ul>
			<div className="group relative">
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
