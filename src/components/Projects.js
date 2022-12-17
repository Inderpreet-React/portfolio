import React from "react";
import ProjectItem from "./ProjectItem";
import eshopee from "../images/E-Shopee.png";
import chatapp from "../images/Chatapp.png";
import todo from "../images/todo.png";
import gymManagement from "../images/gymmanagement.png";

export default function Projects({ isProjectRef }) {
	const img =
		"https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000";

	return (
		<section id="projects">
			<div className="flex h-full min-h-screen w-full flex-col gap-12 overflow-hidden bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pb-0 md:pt-32">
				<div className="relative">
					<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
						{"<h1>"}
					</span>
					<h1
						ref={isProjectRef}
						className="relative max-w-min overflow-hidden text-ellipsis whitespace-nowrap bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-5xl font-extrabold underline md:text-6xl"
					>
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
						<div className="relative grid h-full w-full flex-col gap-20 p-2 md:grid-cols-3 md:place-content-center md:gap-x-10 md:gap-y-10 md:p-4 md:pt-4">
							<ProjectItem img={eshopee} name="E-Shopee" />
							<ProjectItem img={todo} name="Todo List" />
							<ProjectItem img={gymManagement} name="Gym Management" />
							<ProjectItem img={chatapp} name="Chat App" />
							<ProjectItem img={img} name="Covid Tracker" />
						</div>
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-bottom-20 md:-left-8">
							{"</ul>"}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
