import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

export default function Projects() {
	const img =
		"https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000";
	const colorOption = [
		"yellow",
		"cyan",
		"lime",
		"indigo",
		"purple",
		"fuchsia",
		"pink",
	];

	function get_random(list) {
		return list[Math.floor(Math.random() * list.length)];
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex h-full min-h-screen w-full flex-col gap-12 bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pb-0 md:pt-32">
				<div className="relative">
					<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
						{"<h1>"}
					</span>
					<h1 className="relative max-w-min overflow-hidden text-ellipsis whitespace-nowrap bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-5xl font-extrabold underline md:text-6xl">
						Projects
					</h1>
					<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
						{"</h1>"}
					</span>
				</div>
				<div className="flex h-full w-full items-center justify-center md:mb-8">
					<div className="relative mb-12 h-full w-full rounded">
						<span className="absolute -top-8 -left-2 text-lg font-normal italic text-neutral-700 md:-top-2 md:-left-8">
							{"<ul>"}
						</span>
						<div className="relative grid h-full w-full flex-col gap-20 p-2 md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:pt-4">
							<ProjectItem
								img={img}
								name="E-Shopee"
								desc={"A E-Commerce website"}
								color={get_random(colorOption)}
							/>
							<ProjectItem
								img={img}
								name="Gym Management"
								desc={"A E-Commerce website"}
								color={get_random(colorOption)}
							/>
							<ProjectItem
								img={img}
								name="Todo List"
								desc={"A E-Commerce website"}
								color={get_random(colorOption)}
							/>
							<ProjectItem
								img={img}
								name="Chat App"
								desc={"A E-Commerce website"}
								color={get_random(colorOption)}
							/>
							<ProjectItem
								img={img}
								name="Covid Tracker"
								desc={"A E-Commerce website"}
								color={get_random(colorOption)}
							/>
						</div>
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-bottom-20 md:-left-8">
							{"</ul>"}
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
