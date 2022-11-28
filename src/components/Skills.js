import React from "react";
import { Link } from "react-router-dom";
import JavascriptLogo from "../images/JavascriptLogo";
import ReactIcon from "../images/ReactIcon";
import FirebaseLogo from "../images/FirebaseLogo";
import NodeIcon from "../images/NodeIcon";
import TailwindIcon from "../images/TailwindIcon.png";

export default function Skills() {
	return (
		<div className="h-full min-h-screen w-full bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pb-0 md:pt-32">
			<div className="flex h-full w-full flex-col gap-10 md:flex-row md:gap-20">
				<div className="flex w-full flex-col gap-10 md:w-1/2">
					<div className="relative">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<h1>"}
						</span>
						<h1 className="relative max-w-min overflow-hidden text-ellipsis bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-5xl font-extrabold underline md:whitespace-nowrap md:text-6xl">
							Skills & Experience
						</h1>
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</h1>"}
						</span>
					</div>
					<p className="relative text-justify text-lg">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<p>"}
						</span>
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
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</p>"}
						</span>
					</p>
					<p className="relative text-justify text-lg">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<a>"}
						</span>
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
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</a>"}
						</span>
					</p>
				</div>
				<div className="mb-4 flex w-full flex-col gap-4 pb-4 md:mb-0 md:w-1/2 md:pb-0">
					<h3 className="relative max-w-min text-3xl font-bold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500 md:pt-10">
						Technologies
					</h3>
					<div className="relative text-xl font-bold tracking-widest md:ml-12 md:font-extrabold">
						<span className="absolute -top-4 -left-0 text-lg font-normal italic text-neutral-700 md:-top-3 md:-left-12">
							{"<ul>"}
						</span>
						<div className="relative mt-4 flex items-center gap-4 border-2 border-yellow-300 p-4 shadow-sm shadow-yellow-300 transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-300 md:mr-32">
							<div className="w-20">
								<JavascriptLogo hw={12} />
							</div>
							<span>JavaScript</span>
						</div>
						<div className="relative mt-4 flex items-center gap-4 border-2 border-cyan-300 p-4 shadow-sm shadow-cyan-300 transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-300 md:mr-32">
							<div className="w-20">
								<ReactIcon hw={12} />
							</div>
							<span>React</span>
						</div>
						<div className="relative  mt-4 flex items-center gap-4 border-2 border-lime-400 p-4 shadow-sm shadow-lime-400 transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-lime-400 hover:shadow-lg hover:shadow-lime-400  md:mr-32">
							<div className="w-20">
								<NodeIcon hw={12} />
							</div>
							<span>NodeJS</span>
						</div>
						<div className="relative mt-4 flex items-center gap-4 border-2 border-amber-400 p-4 shadow-sm shadow-amber-400 transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-amber-400 hover:shadow-lg hover:shadow-amber-400  md:mr-32">
							<div className="w-20">
								<FirebaseLogo hw={12} />
							</div>
							<span>Firebase</span>
						</div>
						<div className="relative mt-4 flex items-center gap-4 border-2 border-cyan-300 p-4 shadow-sm shadow-cyan-300 transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-300  md:mr-32">
							<div className="w-20">
								<img src={TailwindIcon} alt="Tailwind" className="h-10 w-10" />
							</div>
							<span>Tailwind</span>
						</div>
						<span className="absolute -left-0 -bottom-8 text-lg font-normal italic text-neutral-700 md:-left-12">
							{"</ul>"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
