import React from "react";

export default function ProjectItem({ img, name, color }) {
	console.log(color);
	return (
		<div className="group h-full w-full rounded transition-all hover:-translate-y-4">
			<span className="relative z-10 min-w-full max-w-min rounded bg-violet-700 p-2 text-2xl font-bold tracking-normal text-gray-100 transition-all">
				{name || "Name"}
			</span>
			<div className="relative z-20 overflow-hidden border-8 border-neutral-600 transition-all group-hover:shadow-lg group-hover:shadow-violet-600">
				<img
					className={`aspect-video w-full  transition-all group-hover:scale-105 md:h-full`}
					src={img}
					alt="project"
				/>
			</div>
		</div>
	);
}
