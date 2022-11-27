import React from "react";

export default function ProjectItem({ img, name, desc }) {
	return (
		<div className="w-full rounded border-2 border-emerald-500 text-white md:min-w-[45%]">
			<p className="z-10 w-full min-w-full bg-emerald-500 p-2 text-center text-lg font-semibold ">
				{name || "Name"}
			</p>
			<img
				className="z-20 aspect-video w-full md:h-full"
				src={img}
				alt="project"
			/>
		</div>
	);
}
