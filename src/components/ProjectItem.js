import React from "react";
import { motion } from "framer-motion";

const variants = {
	entry: { y: "30%", scale: 1.01, opacity: 0 },
	exit: { y: 0, scale: 1, opacity: 1 },
};

export default function ProjectItem({ img, name, color }) {
	return (
		<motion.div
			initial="entry"
			whileInView="exit"
			transition={{ duration: "0.3", ease: "linear" }}
			variants={variants}
			viewport={{ once: true }}
			className="group h-full w-full rounded transition-all hover:-translate-y-4"
		>
			<span className="relative z-10 min-w-full max-w-min rounded bg-violet-700 p-2 text-2xl font-bold tracking-normal text-gray-100 transition-all">
				{name || "Name"}
			</span>
			<div className="relative z-20 overflow-hidden border-8 border-neutral-600 transition-all group-hover:shadow-lg group-hover:shadow-violet-500">
				<img
					className={`aspect-video w-full  transition-all group-hover:scale-105 md:h-full`}
					src={img}
					alt="project"
				/>
			</div>
		</motion.div>
	);
}
