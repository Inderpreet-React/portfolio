import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
	return (
		<div className="h-screen w-full bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pt-32">
			<div className="flex w-full flex-col gap-20 md:flex-row">
				<div className="flex w-full flex-col gap-10 md:w-1/2">
					<h1 className="max-w-min bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-5xl font-extrabold underline md:whitespace-nowrap md:text-6xl">
						Skills & Experience
					</h1>
					<p className="text-justify text-lg">
						Est est culpa voluptate nulla eiusmod occaecat irure eiusmod
						ullamco. Irure cupidatat consequat consectetur ad laboris excepteur
						cupidatat voluptate ipsum aliqua Lorem consequat. Ea est do aute sit
						reprehenderit. ex tempor consectetur ut amet ut culpa minim.
						<br />
						<br />
						aliquip incididunt consectetur ullamco laborum eu veniam ad sunt
						cupidatat. Laborum non anim nulla sint est consequat in proident ad
						sunt magna. Fugiat nostrud aute magna cupidatat sunt excepteur irure
						id in officia sit qui.
					</p>
					<p className="text-justify text-lg">
						Visit my{" "}
						<a
							href="https://github.com/Inderpreet-React"
							target="_blank"
							rel="noopener noreferrer"
							className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
						>
							LinkedIn
						</a>{" "}
						or{" "}
						<Link
							className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
							to="/contactme"
						>
							Contact me{" "}
						</Link>
						directly.
					</p>
				</div>
				<div className="w-full md:w-1/2">
					<div>React</div>
				</div>
			</div>
		</div>
	);
}
